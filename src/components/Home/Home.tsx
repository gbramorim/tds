import React, { useState } from "react";
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

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    condition: {
      text: string;
    };
  };
}

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>();
  const [city, setCity] = useState("");

  const handleSubmit = async (city: string) => {
    const API_KEY = "bef687a05a9f4d789ae22518232701";
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
      const response = await axios.get(API_URL).then((res) => res.data);
      setWeather(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCityChange = (selected: string) => {
    setCity(selected);
    handleSubmit(selected);
  };

  console.log(weather);

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
