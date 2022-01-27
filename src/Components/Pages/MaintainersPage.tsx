import React, { useEffect } from "react"
import { useParams } from "@chainsafe/common-components"
import { useLanguageContext } from "../../LanguageContext"
import Footer from "../Modules/Footer"
import NavBar2 from "../Modules/NavBar"
import Maintainers from "../Subpages/Maintainers"
import UsedBy2 from "../Subpages/Usedby2"

const MaintainersPage: React.FC = () => {
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
      {/* <NavBar2/> */}
      <UsedBy2/>
      {/* <Footer/> */}
    </div>
  )
}

export default MaintainersPage
