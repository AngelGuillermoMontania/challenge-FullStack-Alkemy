import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import functionStore from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
const {store, persistor} = functionStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain='dev-ozuy188m.us.auth0.com'
            clientId='Cj4ycp5OiZUf9jxvg4kOPnyQ7m9I0riI'
            redirectUri={`${window.location.origin}/home`}
        >
            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor} >
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </Auth0Provider>
    </React.StrictMode>
);

reportWebVitals();
