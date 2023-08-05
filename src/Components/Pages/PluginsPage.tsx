import React, { useEffect } from "react"
import { useParams, } from "@chainsafe/common-components"
import { useLanguageContext } from "../../LanguageContext"
import FullTimeline from '../Subpages/FullTimeline';
import NavBar from '../Modules/NavBar';
import Footer from '../Modules/Footer';
import PluginsList from "../Subpages/PluginsList";
import { useStyles } from "./HomePage";
import { usePlugins } from "../../hooks/usePlugins";

const PluginsPage: React.FC = () => {
  const classes = useStyles();
  const { lang } = useParams();
  const { availableLanguages, selectedLanguage, setActiveLanguage } = useLanguageContext();
  const pluginData = usePlugins();
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
        <FullTimeline title="Plugins" ><PluginsList pluginData={pluginData}/></FullTimeline>
      </div>
      <Footer />
    </>
  )
}

export default PluginsPage
