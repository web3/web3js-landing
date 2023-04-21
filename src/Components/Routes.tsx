import React, { useEffect } from 'react';
import { Switch, Route, useLocation, Router } from '@chainsafe/common-components';
import HomePage from './Pages/HomePage';
import MaintainersPage from './Pages/MaintainersPage';
import PluginsPage from './Pages/PluginsPage';

export const ROUTE_LINKS = {
  HomeLang: (lang = ':lang') => `/${lang}`,
  TermsOfService: '/terms-of-service',
  PrivacyPolicy: '/privacy-policy',
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL ?? ""}>
      <ScrollToTop/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/maintainers' component={MaintainersPage} />
        <Route exact path='/plugins' component={PluginsPage} />
        <Route path={ROUTE_LINKS.HomeLang()} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
