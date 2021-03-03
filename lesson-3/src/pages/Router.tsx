import * as React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Routes, {RoutesNames} from "./routes";
import {Root} from "./Root";

export const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <React.Suspense fallback={<div/>}>
        <Switch>
          <Route exact path={Routes.ROOT} component={Root}/>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}
