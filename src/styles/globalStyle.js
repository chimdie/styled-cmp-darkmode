import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#000000",
  color: "#ccc",
};

export const lightTheme = {
  body: "#f5f5f5",
  color: "#000",
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    height: 100%;
    font-family: 'Sniglet', cursive, 'Roboto', 'Oxygen';
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.body};
    line-height: 1.5;
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
  }
`;
