import React from "react"
import { ThemeProvider, createTheme } from "@chainsafe/common-theme"
import { LanguageProvider } from "./LanguageContext"
import { CssBaseline, Router } from "@chainsafe/common-components"
import "@chainsafe/common-theme/dist/font-faces.css"
import Routes from "./Components/Routes"

const theme = createTheme({
  globalStyling: {
    body: {
      backgroundColor: "#0f0f0f",
      overflowX: "hidden",
    },
  },
  themeConfig: {
    palette: {
      primary: {
        main: "#5165DC",
      }
    },
    constants: {
      headerHeight: 70,
    },
    typography: {
      h1: {
        fontSize: "72px",
        lineHeight: "80px",
      },
      h2: {
        fontSize: "48px",
        lineHeight: "56px",
      },
      h3: {
        fontSize: "30px",
        lineHeight: "38px",
      },
      h4: {
        fontSize: "24px",
        lineHeight: "28px"
      }
    }
  }
})

const availableLanguages = [
  { id: "en", label: "English" },
  { id: "fr", label: "Français" }
]

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider availableLanguages={availableLanguages}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
