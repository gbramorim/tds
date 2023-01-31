import React from "react";
import ReactDOM from "react-dom/client";
import { Error, Home, Weather } from "./components/index";
import { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

// this reset is not necessary, but it's a good practice
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SFNS', sans-serif;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: `/weather/:city`,
    element: <Weather />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
