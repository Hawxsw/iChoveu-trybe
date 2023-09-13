const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const responseCitieUrl = await fetch(
    `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`,
  );
  const dataCitie = await responseCitieUrl.json();
  if (dataCitie.length < 1) {
    alert('Nenhuma cidade encontrada');
    return dataCitie;
  }
  return dataCitie;
};

export const getWeatherByCity = async (cityURL) => {
  const foundCityUrl = await fetch(
    `http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`,
  );
  const urlCity = await foundCityUrl.json();
  console.log(urlCity);
  const conditionReturn = {
    name: urlCity.location.name,
    country: urlCity.location.country,
    temp: urlCity.current.temp_c,
    condition: urlCity.current.condition.text,
    icon: urlCity.current.condition.icon,
    url: cityURL,
  };
  return conditionReturn;
};
