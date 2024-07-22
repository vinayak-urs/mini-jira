import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './utils/appStore.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
