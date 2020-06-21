import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './index.scss';
import {Provider} from "react-redux";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import RestoServiceContext from "./components/resto-service-context";
import RestoService from "./services/resto-service";
import {BrowserRouter, HashRouter} from "react-router-dom";

const restoService = new RestoService()
const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <RestoServiceContext.Provider value={restoService}>
        <HashRouter>
          <App/>
        </HashRouter>
      </RestoServiceContext.Provider>
    </ErrorBoundry>
  </Provider>
  , rootElement);

