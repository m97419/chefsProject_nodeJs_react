import 'primereact/resources/themes/saga-orange/theme.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './app/store'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
// import "primereact/resources/themes/lara-light-cyan/theme.css";
import {BrowserRouter as Router } from 'react-router-dom';
import 'primereact/resources/themes/saga-orange/theme.css'
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import './assets/theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
