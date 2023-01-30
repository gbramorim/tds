import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { WeatherContainer } from "./styles";
import { GRADIENTS } from "../../constants/constants";
import axios from "axios";

export default function Weather() {
  const { city, tempc, feelslike_c, humidity, condition } = useParams();

  const [openWeather, setOpenWeather] = useState({} as any);

  const handleSubmit = async () => {
    const API_KEY = "c06d43e68a77af811856799058da43b7";
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

    try {
      const response = await axios.get(API_URL).then((res) => res.data);
      setOpenWeather(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const CityName = city;
  const Temperature = tempc;
  const FeelsLike = feelslike_c;
  const Humidity = humidity;
  const Condition = condition;

  const { temp, feels_like, temp_min, temp_max, pressure } = openWeather.main;
  const { id, main } = openWeather.weather[0];
  const { deg, speed } = openWeather.wind;

  console.log(id, main);
  return (
    <WeatherContainer>
      <h1>{CityName}</h1>
      <h2>{main}</h2>
      <h2>{Temperature}°C</h2>
      <h3>Max: {temp_max}°C</h3>
      <h3>Min: {temp_min}°C</h3>
      <h3>Feels like {FeelsLike}°C</h3>
      <h3>Humidity: {Humidity}%</h3>
      <h3>Condition: {Condition}</h3>
      <h3>OpenWeather</h3>
      <h3>Temperature: {temp}°C</h3>
      <h3>Feels like: {feels_like}°C</h3>
      <h3>Pressure: {pressure}</h3>
      <h3>Wind</h3>
      <h3>Speed: {speed} m/s</h3>
      <h3>Direction: {deg}°</h3>
    </WeatherContainer>
  );
}
