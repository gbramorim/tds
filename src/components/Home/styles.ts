import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0f0f0f;
`;

export const HomeTitle = styled.h1`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
`;

export const HomeSubtitle = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 46px;
`;

export const WorldWideSVG = styled.img`
  width: 114px;
  height: 114px;
  margin-bottom: 64px;
`;

export const HomeButtonsContainer = styled.div`
  font-family: "SFNS Display Regular";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeButtonsColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HomeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  width: 50px;
  height: 40px;
  font-size: 20px;
  flex: 0 0 33.33%;
`;
