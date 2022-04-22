import React from "react"
import { Switch, Route } from "@chainsafe/common-components"
import HomePage from "./Pages/HomePage"
import MaintainersPage from "./Pages/MaintainersPage"

export const ROUTE_LINKS = {
  HomeLang: (lang = ":lang") => `/${lang}`,
  TermsOfService: "/terms-of-service",
  PrivacyPolicy: "/privacy-policy",
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/maintainers" component={MaintainersPage} />
      <Route path={ROUTE_LINKS.HomeLang()} component={HomePage} />
    </Switch>
  )
}

export default Routes
