import React, { useEffect } from "react"
import { useParams, } from "@chainsafe/common-components"
import { useLanguageContext } from "../../LanguageContext"
import { makeStyles, ITheme, createStyles } from "@chainsafe/common-theme"
import FullTimeline from '../Subpages/FullTimeline';
import NavBar from '../Modules/NavBar';
import Footer from '../Modules/Footer';


const useStyles = makeStyles(({constants, breakpoints}:ITheme) => {
  return createStyles({
    globalWrap: {
      [breakpoints.up(1599)]: {
        maxWidth: "70%",
        left: "50%",
        position: "relative",
        transform: "translate(-50%)",
      },
      [breakpoints.up(1199)]: {
        margin: `0 ${constants.desktopMargin}px 0`,
      },
      [breakpoints.up(599)]: {
        margin: `0 ${constants.mobileMargin}px 0`,
      },
      [breakpoints.up(360)]: {
        margin: `0 ${constants.mobileMargin}px 0`,
      },
    }
  })
})

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
        <NavBar/>
        <FullTimeline/>
      </div>
      <Footer/>
    </>
  )
}

export default MaintainersPage
