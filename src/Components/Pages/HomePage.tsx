import React, { useEffect } from "react"
import { useParams } from "@chainsafe/common-components"
import { useLanguageContext } from "../../LanguageContext"
import Hero from "../Subpages/Hero"
import Why from "../Subpages/Why"

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
      <Hero />
      <Why />
    </div>
  )
}

export default HomePage
