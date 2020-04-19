import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("french");
  const changeLanguage = (e) => setLanguage(e.target.value);
  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage: changeLanguage }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}
