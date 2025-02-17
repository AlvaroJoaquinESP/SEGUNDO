import {  BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { store } from './store.js';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
)
