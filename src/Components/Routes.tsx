import React from "react"
import { Switch, Route } from "@chainsafe/common-components"
import HomePage from "./Pages/HomePage"

export const ROUTE_LINKS = {
  Home: "/",
  HomeLang: (lang = ":lang") => `/${lang}`,
  TermsOfService: "/terms-of-service",
  PrivacyPolicy: "/privacy-policy",
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_LINKS.Home} component={HomePage} />
      <Route path={ROUTE_LINKS.HomeLang()} component={HomePage} />
    </Switch>
  )
}

export default Routes
