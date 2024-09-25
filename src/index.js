import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const rootElement = document.getElementById('root'); 
const root = ReactDOM.createRoot(rootElement);

root.render( 
    <React.StrictMode>
         <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
        </Provider>
    </React.StrictMode>
);
