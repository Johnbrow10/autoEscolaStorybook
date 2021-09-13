import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const theme = {
  colorYellow: "#ffc107",
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
);

export default ThemeProvider;
