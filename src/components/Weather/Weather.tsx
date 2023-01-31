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
  DayContainerStations,
  DayContainerIconStations,
  DayContainerTextStations,
  InformationContainer,
  InformationContainerContent,
  Divider,
  InformationContainerContentTitle,
  InformationContainerContentResult,
  BackButton,
} from "./styles";
import {
  IconAfternoon,
  IconDawn,
  IconMorning,
  IconNight,
  backgroundGradient,
  getWeatherIcon,
  IconBack,
  ArrowDown,
  ArrowUp,
} from "./Utils";
// import { ArrowDown, ArrowUp } from "../../assets";

export default function Weather() {
  const location = useLocation();
  const object = location.state;

  const theme = backgroundGradient(object.condition);
  const icon = getWeatherIcon(object.condition);

  console.log(theme);

  return (
    <WeatherContainer theme={theme}>
      <BackButton onClick={() => window.history.back()}>
        <img src={IconBack(theme)} alt="Go Back Button" />
      </BackButton>
      <WeatherTitle theme={theme}>{object.city}</WeatherTitle>
      <WeatherSubtitle theme={theme}>{object.condition}</WeatherSubtitle>
      <WeatherContainerTemperature>
        <WeatherTemperature theme={theme}>
          {object.tempc | 0}
        </WeatherTemperature>
        <WeatherContainerTemperatureMinAndMax>
          <WeatherCelsiusIcon theme={theme}>C°</WeatherCelsiusIcon>
          <WeatherContainerTemperatureMinAndMaxArrowsContainer>
            <Arrows src={ArrowUp(theme)} alt="Arrow Up" />
            <MinAndMaxTemperature theme={theme}>
              {object.maxTemp | 0}°
            </MinAndMaxTemperature>
          </WeatherContainerTemperatureMinAndMaxArrowsContainer>
          <WeatherContainerTemperatureMinAndMaxArrowsContainer>
            <Arrows src={ArrowDown(theme)} alt="Arrow Down" />
            <MinAndMaxTemperature theme={theme}>
              {object.minTemp | 0}°
            </MinAndMaxTemperature>
          </WeatherContainerTemperatureMinAndMaxArrowsContainer>
        </WeatherContainerTemperatureMinAndMax>
      </WeatherContainerTemperature>
      <WeatherIcon src={icon} alt="Icon for represent climatics" />

      <DayContainer>
        <DayContainerStations>
          <DayContainerTextStations theme={theme}>
            dawn
          </DayContainerTextStations>
          <DayContainerIconStations src={IconDawn(theme)} />
          <DayContainerTextStations theme={theme}>
            {object.hours.three.tempc | 0}°C
          </DayContainerTextStations>
        </DayContainerStations>
        <DayContainerStations>
          <DayContainerTextStations theme={theme}>
            morning
          </DayContainerTextStations>
          <DayContainerIconStations src={IconMorning(theme)} />
          <DayContainerTextStations theme={theme}>
            {object.hours.fifteen.tempc | 0}°C
          </DayContainerTextStations>
        </DayContainerStations>
        <DayContainerStations>
          <DayContainerTextStations theme={theme}>
            afternoon
          </DayContainerTextStations>
          <DayContainerIconStations src={IconAfternoon(theme)} />
          <DayContainerTextStations theme={theme}>
            {object.hours.nine.tempc | 0}°C
          </DayContainerTextStations>
        </DayContainerStations>
        <DayContainerStations>
          <DayContainerTextStations theme={theme}>
            night
          </DayContainerTextStations>
          <DayContainerIconStations src={IconNight(theme)} />
          <DayContainerTextStations theme={theme}>
            {object.hours.twentyone.tempc | 0}°C
          </DayContainerTextStations>
        </DayContainerStations>
      </DayContainer>
      <InformationContainer>
        <InformationContainerContent>
          <InformationContainerContentTitle theme={theme}>
            wind speed
          </InformationContainerContentTitle>
          <InformationContainerContentResult theme={theme}>
            {object.wind}m/s
          </InformationContainerContentResult>
        </InformationContainerContent>
        <Divider />
        <InformationContainerContent>
          <InformationContainerContentTitle theme={theme}>
            sunrise
          </InformationContainerContentTitle>
          <InformationContainerContentResult theme={theme}>
            {object.sunrise}
          </InformationContainerContentResult>
        </InformationContainerContent>
        <Divider />
        <InformationContainerContent>
          <InformationContainerContentTitle theme={theme}>
            sunset
          </InformationContainerContentTitle>
          <InformationContainerContentResult theme={theme}>
            {object.sunset}
          </InformationContainerContentResult>
        </InformationContainerContent>
        <Divider />
        <InformationContainerContent>
          <InformationContainerContentTitle theme={theme}>
            humidity
          </InformationContainerContentTitle>
          <InformationContainerContentResult theme={theme}>
            {object.humidity}%
          </InformationContainerContentResult>
        </InformationContainerContent>
      </InformationContainer>
    </WeatherContainer>
  );
}
