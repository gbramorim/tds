import { useLocation } from "react-router";
import {
  WeatherContainer,
  WeatherContainerTemperature,
  WeatherContainerTemperatureMinAndMax,
  WeatherContainerTemperatureMinAndMaxArrowsContainer,
  WeatherSubtitle,
  WeatherTemperature,
  WeatherTitle,
  Arrows,
  MinAndMaxTemperature,
  WeatherCelsiusIcon,
  WeatherIcon,
  DayContainer,
} from "./styles";
import { backgroundGradient, getWeatherIcon } from "./Utils";
import { ArrowDown, ArrowUp } from "../../assets";

export default function Weather() {
  const location = useLocation();
  const object = location.state;

  const theme = backgroundGradient(object.condition);
  const icon = getWeatherIcon(object.condition);

  console.log(icon);

  return (
    <WeatherContainer theme={theme}>
      <WeatherTitle theme={theme}>{object.city}</WeatherTitle>
      <WeatherSubtitle theme={theme}>{object.condition}</WeatherSubtitle>
      <WeatherContainerTemperature>
        <WeatherTemperature>{object.tempc | 0}</WeatherTemperature>
        <WeatherContainerTemperatureMinAndMax>
          <WeatherCelsiusIcon>C°</WeatherCelsiusIcon>
          <WeatherContainerTemperatureMinAndMaxArrowsContainer>
            <Arrows src={ArrowUp} alt="Arrow Up" />
            <MinAndMaxTemperature>{object.maxTemp | 0}°</MinAndMaxTemperature>
          </WeatherContainerTemperatureMinAndMaxArrowsContainer>
          <WeatherContainerTemperatureMinAndMaxArrowsContainer>
            <Arrows src={ArrowDown} alt="Arrow Down" />
            <MinAndMaxTemperature>{object.minTemp | 0}°</MinAndMaxTemperature>
          </WeatherContainerTemperatureMinAndMaxArrowsContainer>
        </WeatherContainerTemperatureMinAndMax>
      </WeatherContainerTemperature>
      <WeatherIcon src={icon} alt="" />

      <DayContainer>
        <h4>dawn</h4>
        <h4>morning</h4>
        <h4>afternoon</h4>
        <h4>night</h4>
      </DayContainer>
      <h3>Humidity: {object.humidity}%</h3>
      <h3>Wind: {object.wind} mph</h3>
      <h3>Sunrise: {object.sunrise}</h3>
      <h3>Sunset: {object.sunset}</h3>
      <h3>3:00: {object.hours.three.tempc}°C</h3>
      <h3>9:00: {object.hours.nine.tempc}°C</h3>
      <h3>15:00: {object.hours.fifteen.tempc}°C</h3>
      <h3>21:00: {object.hours.twentyone.tempc}°C</h3>
    </WeatherContainer>
  );
}
