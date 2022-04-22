import React, { useEffect } from "react"
import { useParams } from "@chainsafe/common-components"
import { makeStyles, ITheme, createStyles } from "@chainsafe/common-theme"
import { useLanguageContext } from "../../LanguageContext"
import InternalNav from "../Modules/InternalNav"
import Footer from "../Modules/Footer"
import NavBar2 from "../Modules/NavBar"
import Hero2 from "../Subpages/Hero2"
import About from "../Subpages/About"
import Features from "../Subpages/Features"
import CodeBlocks from "../Subpages/CodeBlocks"
import UsedBy from "../Subpages/UsedBy"
import Stats from "../Subpages/Stats"
import Timeline from "../Subpages/Timeline"

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

const HomePage: React.FC = () => {
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
  const classes = useStyles();

  return (
    <>
      <div className={classes.globalWrap}>
        <NavBar2/>
        <InternalNav/>
        <Hero2/>
        <About/>
        <Features/>
        <CodeBlocks/>
        <UsedBy/>
        <Stats/>
        <Timeline/>
      </div>
      <Footer/>
    </>
  )
}

export default HomePage
