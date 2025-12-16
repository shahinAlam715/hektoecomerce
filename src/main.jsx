import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import { ContextApi } from './Component/ContextApi.jsx';
import store from './Store'
import  { Provider }  from 'react-redux'
import firebaseConfig from "./firbase.confiq.js"



createRoot(document.getElementById('root')).render(

  <Provider store={store}>

  <ContextApi>
    <App />
  </ContextApi>
  </Provider>
)
