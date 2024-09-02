import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ApplyPage from './pages/ApplyPage';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
