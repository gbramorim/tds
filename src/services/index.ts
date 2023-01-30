import axios from "axios";

function getWeather(city: string) {
  const API_KEY = "bef687a05a9f4d789ae22518232701";
  const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  return axios
    .get(API_URL)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export { getWeather };
