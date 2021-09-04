import React from 'react';
import ReactDOM from 'react-dom'; 
// import 'react-owl-carousel2/style.css';
// import 'src/cloudnine-portal-frontend/node_modules/react-owl-carousel2/lib/styles.css'
// import '../node_modules/react-slick/lib/'
import './index.css';
import App from './App/App';
import {Provider} from 'react-redux';
import store from './store.js'
import reportWebVitals from './reportWebVitals';


  

ReactDOM.render(
  <Provider store={store}>
      <App />
</Provider>,
  document.getElementById('root')
);

reportWebVitals();
