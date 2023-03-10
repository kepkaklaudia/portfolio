import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { useState } from "react";
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
import { nanoid } from '@reduxjs/toolkit';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(teal);
  const themes = [
    teal,
    mint,
    blue,
    orange,
    magenta,
    turquoise
  ];

  return (
    <ThemeProvider
      theme={selectedTheme}
    >
      <GlobalStyle />
      <Container>
        <HashRouter>
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
        </HashRouter>
        <ThemeContainer>
          {themes.map(theme => (
            <ThemeButton
              key={nanoid()}
              className={`${theme.name} ${selectedTheme === theme ? "selected" : ""}`}
              onClick={() => setSelectedTheme(theme)}>
            </ThemeButton>
          ))}
        </ThemeContainer>
      </Container>
    </ ThemeProvider>
  );
}

export default App;
