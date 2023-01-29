import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Header from './common/Header';

function App() {
  return (
    <Container>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
