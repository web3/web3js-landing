import React, { useEffect } from "react"
import { useParams, } from "@chainsafe/common-components"
import { useLanguageContext } from "../../LanguageContext"
import FullTimeline from '../Subpages/FullTimeline';
import NavBar from '../Modules/NavBar';
import Footer from '../Modules/Footer';
import Maintainers from "../Subpages/Maintainers";
import { useStyles } from "./HomePage";

const MaintainersPage: React.FC = () => {
  const classes = useStyles();
  const { lang } = useParams()
  const { availableLanguages, selectedLanguage, setActiveLanguage } = useLanguageContext()

  useEffect(() => {
    if (!lang) return

    const availableRoute = availableLanguages.find((availableLanguage) => availableLanguage.id === lang)

    if (availableRoute !== undefined && selectedLanguage !== lang) {
      setActiveLanguage(lang, false)
    }
  }
    , [availableLanguages, lang, selectedLanguage, setActiveLanguage]
  )

  return (
    <>
      <div className={classes.globalWrap}>
        <NavBar />
        <FullTimeline title="The mainteiners behind web3.js" ><Maintainers /></FullTimeline>
      </div>
      <Footer />
    </>
  )
}

export default MaintainersPage
