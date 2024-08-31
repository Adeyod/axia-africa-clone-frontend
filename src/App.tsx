import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ApplyPage from './pages/ApplyPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
