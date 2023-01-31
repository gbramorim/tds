import { useNavigate } from "react-router-dom";
import { HOME } from "../../constants/constants";
import {
  HomeButtonsContainer,
  HomeContainer,
  HomeSubtitle,
  HomeTitle,
  WorldWideSVG,
  HomeButton,
  HomeButtonsColumn,
} from "./styles";
import { WorldWide } from "../../assets";
import axios from "axios";

export default function Home() {
  let navigate = useNavigate();

  const handleSubmit = async (city: string) => {
    const API_KEY = "bef687a05a9f4d789ae22518232701";
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`;

    try {
      const response = await axios.get(API_URL).then((res) => res.data);

      const result = {
        city: response.location.name,
        tempc: response.current.temp_c,
        condition: response.forecast.forecastday[0].day.condition.text,
        maxTemp: response.forecast.forecastday[0].day.maxtemp_c,
        minTemp: response.forecast.forecastday[0].day.mintemp_c,
        hours: {
          three: {
            tempc: response.forecast.forecastday[0].hour[3].temp_c,
            condition: response.forecast.forecastday[0].hour[3].condition.text,
          },
          nine: {
            tempc: response.forecast.forecastday[0].hour[9].temp_c,
            condition: response.forecast.forecastday[0].hour[9].condition.text,
          },
          fifteen: {
            tempc: response.forecast.forecastday[0].hour[15].temp_c,
            condition: response.forecast.forecastday[0].hour[15].condition.text,
          },
          twentyone: {
            tempc: response.forecast.forecastday[0].hour[21].temp_c,
            condition: response.forecast.forecastday[0].hour[21].condition.text,
          },
        },
        wind: response.current.wind_mph,
        humidity: response.current.humidity,
        sunrise: response.forecast.forecastday[0].astro.sunrise,
        sunset: response.forecast.forecastday[0].astro.sunset,
      };

      navigate(`/weather/${city}`, { state: result });

      // navigate(
      //   `/weather/${city}/${}/${response.current.temp_c}/${response.forecast.forecastday[0].day.maxtemp_c}/${response.forecast.forecastday[0].day.mintemp_c}/`
      // );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCityChange = (selected: string) => {
    handleSubmit(selected);
  };

  return (
    <HomeContainer>
      <HomeTitle>{HOME.TITLE}</HomeTitle>
      <HomeSubtitle>{HOME.SUBTITLE}</HomeSubtitle>
      <WorldWideSVG src={WorldWide} />
      <HomeButtonsContainer>
        <HomeButtonsColumn>
          {HOME.CITIES.map((city, index) => {
            return (
              <HomeButton key={index} onClick={() => handleCityChange(city)}>
                {city}
              </HomeButton>
            );
          })}
        </HomeButtonsColumn>
      </HomeButtonsContainer>
    </HomeContainer>
  );
}
