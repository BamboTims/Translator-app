export const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'cf041ec36emsh7ea1ee7d0932ebbp18802ajsn5dbf3d50a9b2',
    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
  },
};

export const fetchTranslations = async (languageFrom, languageTo, options) => {
  const response = await fetch(
    `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${languageTo}&api-version=3.0&from=${languageFrom}&profanityAction=NoAction&textType=plain`,
    options
  );
  const data = await response.json();
  console.log(data);
};
