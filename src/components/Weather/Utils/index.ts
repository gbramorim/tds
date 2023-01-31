import { GRADIENTS } from "../../../constants/constants";
import {
  CloudSunBlack,
  CloudSunBlue,
  MoonBlack,
  MoonBlue,
  Rain,
  RainBlack,
  RainSunBlack,
  Snow,
  SnowGrey,
  SnowMoon,
  SnowSun,
  Sun,
  SunBlue,
} from "../../../assets";

export const getWeatherIcon = (weather: string) => {
  if (weather === "Sunny" || weather === "Clear" || weather === "Dry") {
    return Sun;
  } else if (
    weather === "Partly cloudy" ||
    weather === "Cloudy" ||
    weather === "Overcast" ||
    weather === "Mist" ||
    weather === "Patchy rain possible" ||
    weather === "Patchy light drizzle" ||
    weather === "Light drizzle" ||
    weather === "Patchy light rain" ||
    weather === "Light rain" ||
    weather === "Moderate rain at times" ||
    weather === "Moderate rain" ||
    weather === "Heavy rain at times" ||
    weather === "Heavy rain"
  ) {
    return Rain;
  } else if (
    weather === "Freezing fog" ||
    weather === "Light freezing rain" ||
    weather === "Moderate or heavy freezing rain" ||
    weather === "Light sleet" ||
    weather === "Moderate or heavy sleet" ||
    weather === "Patchy light snow" ||
    weather === "Light snow" ||
    weather === "Patchy moderate snow" ||
    weather === "Moderate snow" ||
    weather === "Patchy heavy snow" ||
    weather === "Heavy snow" ||
    weather === "Ice pellets" ||
    weather === "Light rain shower" ||
    weather === "Moderate or heavy rain shower" ||
    weather === "Torrential rain shower"
  ) {
    return Snow;
  }
};

export const backgroundGradient = (weather: string) => {
  if (weather === "Sunny" || weather === "Clear" || weather === "Dry") {
    return GRADIENTS.SUNNY;
  } else if (
    weather === "Partly cloudy" ||
    weather === "Cloudy" ||
    weather === "Overcast" ||
    weather === "Mist" ||
    weather === "Patchy rain possible" ||
    weather === "Patchy light drizzle" ||
    weather === "Light drizzle" ||
    weather === "Patchy light rain" ||
    weather === "Light rain" ||
    weather === "Moderate rain at times" ||
    weather === "Moderate rain" ||
    weather === "Heavy rain at times" ||
    weather === "Heavy rain"
  ) {
    return GRADIENTS.RAINY;
  } else if (
    weather === "Freezing fog" ||
    weather === "Light freezing rain" ||
    weather === "Moderate or heavy freezing rain" ||
    weather === "Light sleet" ||
    weather === "Moderate or heavy sleet" ||
    weather === "Patchy light snow" ||
    weather === "Light snow" ||
    weather === "Patchy moderate snow" ||
    weather === "Moderate snow" ||
    weather === "Patchy heavy snow" ||
    weather === "Heavy snow" ||
    weather === "Ice pellets" ||
    weather === "Light rain shower" ||
    weather === "Moderate or heavy rain shower" ||
    weather === "Torrential rain shower"
  ) {
    return GRADIENTS.SNOWY;
  }
};

export const IconDawn = (theme?: string) => {
  if (theme !== "Snowy" && theme !== "Sunny") {
    return RainBlack;
  } else if (theme === "Snowy") {
    return SnowGrey;
  } else {
    return CloudSunBlue;
  }
};

export const IconMorning = (theme?: string) => {
  if (theme !== "Snowy" && theme !== "Sunny") {
    return RainSunBlack;
  } else if (theme === "Snowy") {
    return SnowSun;
  } else {
    return SunBlue;
  }
};

export const IconAfternoon = (theme?: string) => {
  if (theme !== "Snowy" && theme !== "Sunny") {
    return CloudSunBlack;
  } else if (theme === "Snowy") {
    return SnowSun;
  } else {
    return CloudSunBlue;
  }
};

export const IconNight = (theme?: string) => {
  if (theme !== "Snowy" && theme !== "Sunny") {
    return MoonBlack;
  } else if (theme === "Snowy") {
    return SnowMoon;
  } else {
    return MoonBlue;
  }
};
