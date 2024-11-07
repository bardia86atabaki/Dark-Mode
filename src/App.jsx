import React from "react";
import { ThemeProvider } from "./Compponents/ThemeContext";
import Container from "./Compponents/Contianer";

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
