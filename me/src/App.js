import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main';
import './style/main.scss';
import './style/App.css';

const { HOME_URL } = "https://raphaelletherese.github.io/";

// === PAGES ===
const Index = lazy(() => import('./pages/Index'));

const App = () => (
    <BrowserRouter basename={HOME_URL}>
        <Suspense fallback={<Main />}>
        <Switch>
            <Route exact path="/" component={Index} />
            {/* <Route component={NotFound} status={404} /> */}
        </Switch>
        </Suspense>
  </BrowserRouter>
);

export default App;
