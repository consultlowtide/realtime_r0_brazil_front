import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Ontario = lazy(() => import('pages/Ontario'));
const Resources = lazy(() => import('pages/Resources'));

const Routes = () => (
  <Suspense fallback={null}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ontario" exact>
          <Ontario />
        </Route>
        <Route path="/canada" exact>
          <Home />
        </Route>
        <Route path="/resources" exact>
          <Resources />
        </Route>
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
