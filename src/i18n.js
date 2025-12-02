import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguagaDelector from "i18next-browser-languagedetector"

import Uz from "./locales/Uz/translation.json"
import Рус from "./locales/Рус/translation.json"
import Узб from "./locales/Узб/translation.json"

i18n
.use(LanguagaDelector) // Brauzerdan tilni avtomatik aniqlash
.use(initReactI18next)
.init({
    resources: {
        Uz: {translation: Uz},
        Рус: {translation: Рус},
        Узб: {translation: Узб},
    },
    failbacking: "Рус",
    // interpolation: {
    //     escapeValue: false,
    // }
})

export default i18n
