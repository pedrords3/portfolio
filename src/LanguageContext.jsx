import React, { createContext, useContext, useState, useEffect } from 'react';
import pt from "./i18n/pt.json";
import en from "./i18n/en.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  const [translations, setTranslations] = useState(pt);

  // Carregar o idioma salvo no localStorage ao iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setTranslations(savedLanguage === 'en' ? en : pt);
    }
  }, []);

  // Salvar idioma no localStorage quando ele mudar
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTranslations(lang === 'en' ? en : pt);
    localStorage.setItem('language', lang);
  };

  const t = (key) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

// import { createContext, useContext, useState } from "react";
// import pt from "./i18n/pt.json";
// import en from "./i18n/en.json";

// const languages = { pt, en };

// const LanguageContext = createContext();

// export function LanguageProvider({ children }) {
//   const [language, setLanguage] = useState("pt");

//   const t = (key) => languages[language][key] || key;

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export const useLanguage = () => useContext(LanguageContext);
