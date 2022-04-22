import React from "react"
import { ThemeProvider, createTheme } from "@chainsafe/common-theme"
import { LanguageProvider } from "./LanguageContext"
import { CssBaseline, Router } from "@chainsafe/common-components"
import "@chainsafe/common-theme/dist/font-faces.css"
import Routes from "./Components/Routes"

const theme = createTheme({
  globalStyling: {
    body: {
      backgroundColor: "#1D1A1A",
      overflowX: "hidden",
    },
    a: {
      textDecoration: "none",
    },
  },
  themeConfig: {
    palette: {
      primary: {
        main: "#F16822",
        dark: "#E03000",
        light: "#FDA733",
      },
      background: {
        default: "#1D1A1A",
      }
    },
    constants: {
      desktopMargin: 32,
      mobileMargin: 16,
    },
    typography: {
      h1: {
        fontSize: "56px",
        lineHeight: "66px",
      },
      h2: {
        fontSize: "34px",
        lineHeight: "44px",
      },
      h2med: {
        fontSize: "34px",
        lineHeight: "44px",
        fontWeight: 600,
      },
      body1: {
        fontSize: "24px",
        lineHeight: "32px",
      },
      body1med: {
        fontSize: "24px",
        lineHeight: "32px",
        fontWeight: 600,
      },
      body2: {
        fontSize: "18px",
        lineHeight: "26px",
        fontWeight: 600,
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
