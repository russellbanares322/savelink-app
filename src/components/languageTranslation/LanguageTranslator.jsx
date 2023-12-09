import React, { useContext } from "react";
import { LinkContext } from "../../context/LinkContext";
import useFetchLanguages from "../../proxies/useFetchLanguages";

const LanguageTranslator = () => {
  const { data } = useFetchLanguages();
  const { setSelectedLanguage } = useContext(LinkContext);

  return (
    <select onChange={(e) => setSelectedLanguage(e.target.value)}>
      {data.map((language) => (
        <option value={language.code} key={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageTranslator;
