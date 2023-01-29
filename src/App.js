import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import './App.css';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Header from './common/Header';
import { GlobalStyle } from './themes/GlobalStyle';
import { teal, mint, blue, orange, magenta, turquoise } from './themes/theme';
import { ThemeContainer, ThemeButton } from './themes/ThemeSwitcher';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(teal);
  const ThemeChangeHandler = (theme) => {
    setSelectedTheme(theme)
  }

  return (
    <ThemeProvider
      theme={selectedTheme}
    >
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/gallery"
              element={<Gallery />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </BrowserRouter>
        <ThemeContainer>
          <ThemeButton
            className={`teal ${selectedTheme === teal ? "selected" : ""}`}
            onClick={() => ThemeChangeHandler(teal)}>
          </ThemeButton>
          <ThemeButton
            className={`mint ${selectedTheme === mint ? "selected" : ""}`}
            onClick={() => ThemeChangeHandler(mint)}>
          </ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "selected" : ""}`}
            onClick={() => ThemeChangeHandler(blue)}>
          </ThemeButton>
          <ThemeButton
            className={`orange ${selectedTheme === orange ? "selected" : ""}`}
            onClick={() => ThemeChangeHandler(orange)}>
          </ThemeButton>
          <ThemeButton
            className={`magenta ${selectedTheme === magenta ? "selected" : ""}`}
            onClick={() => ThemeChangeHandler(magenta)}>
          </ThemeButton>
          <ThemeButton
            className={`turquoise ${selectedTheme === turquoise ? "selected" : ""}`}
            onClick={() => ThemeChangeHandler(turquoise)}>
          </ThemeButton>
        </ThemeContainer>
      </Container>
    </ ThemeProvider>
  );
}

export default App;
