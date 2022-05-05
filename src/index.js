import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter } from 'react-router-dom';import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import {useTranslation , initReactI18next} from "react-i18next";
import common_de from "./translations/de/commom.json";
import common_en from "./translations/en/common.json";



i18n
.use(initReactI18next)
.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'de',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        de: {
            common: common_de
        },
    },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
document.documentElement.lang = i18n.language;
document.body.dir = i18n.dir();
root.render(
    
<BrowserRouter>

<I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>

    </BrowserRouter>
);

