import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <nav style={{ padding: 10, backgroundColor: '#333' }}>
        <Link to="/" style={{ margin: 10, color: '#fff' }}>Home</Link>
        <Link to="/about" style={{ margin: 10, color: '#fff' }}>About</Link>
        <Link to="/projects" style={{ margin: 10, color: '#fff' }}>Projects</Link>
        <Link to="/contact" style={{ margin: 10, color: '#fff' }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
