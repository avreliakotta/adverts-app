import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import {store} from "./redux/store";
import './index.css';
import {persistor} from "./redux/store";
import { HashRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
