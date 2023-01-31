import styled from "styled-components";

export const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: ${(props) =>
    props.theme === "Sunny"
      ? "linear-gradient(to bottom, #57cbdc, #50c0d2, #49b6c9, #42abbf, #3ba1b5);"
      : props.theme === "Rainy"
      ? "linear-gradient(to bottom, #616978, #575f6f, #4e5665, #454c5c, #3c4353);"
      : "linear-gradient(to bottom, #e0e0e0, #d1d1d1, #c3c3c3, #b4b4b4, #a6a6a6);"};
`;

export const WeatherTitle = styled.h1`
  font-size: 30px;
  color: ${(props) => (props.theme === "Snowy" ? "#000" : "#fff")}};
`;

export const WeatherSubtitle = styled.h2`
  font-size: 24px;
  color: ${(props) => (props.theme === "Snowy" ? "#000" : "#fff")}};
`;

export const WeatherContainerTemperature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WeatherContainerTemperatureMinAndMax = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WeatherContainerTemperatureMinAndMaxArrowsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WeatherTemperature = styled.h1`
  font-size: 93px;
  color: ${(props) => (props.theme === "Snowy" ? "#fff" : "#000")}};
`;

export const MinAndMaxTemperature = styled.h3`
  font-size: 14px;
  color: ${(props) => (props.theme === "Snowy" ? "#000" : "#fff")}};
`;

export const Arrows = styled.img`
  width: 12px;
  height: 12px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const WeatherCelsiusIcon = styled.h3`
  font-size: 14px;
  color: ${(props) => (props.theme === "Snowy" ? "#000" : "#fff")}};
  margin-bottom: 10px;
`;

export const WeatherIcon = styled.img`
  width: 110px;
  height: 98px;
  margin-bottom: 50px;
`;
