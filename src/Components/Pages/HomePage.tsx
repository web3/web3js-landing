import React, { useEffect } from "react"
import { useParams } from "@chainsafe/common-components"
import { useLanguageContext } from "../../LanguageContext"
import Hero from "../Subpages/Hero"
import Why from "../Subpages/Why"
import Featured from "../Subpages/Featured"
import NavBar from "../Modules/Navbar"
import FactBanner from "../Subpages/FactBanner"
import CodeSnippets from "../Subpages/CodeSnippets"
import InternalNav from "../Modules/InternalNav"
import Footer from "../Modules/Footer"
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
  return (
    <div>
      <NavBar />
      <InternalNav/>
      <Hero />
      <Featured />
      <Why />
      <FactBanner/>
      <CodeSnippets/>
      <Footer/>
    </div>
  )
}

export default HomePage
