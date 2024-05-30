import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Collection from './pages/Collection';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Pricing" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQs" element={<Testimonials />} />
        <Route path="/Cart" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
