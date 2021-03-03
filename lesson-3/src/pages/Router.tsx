import * as React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Routes from "./routes";

import {Root} from "./Root";
import {Login} from "./Login";

export const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <React.Suspense fallback={<div/>}>
        <Switch>
          <Route exact path={Routes.ROOT} component={Root}/>
          <Route exact path={Routes.LOGIN} component={Login}/>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}
