import React from 'react';
import './index.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import MediaNews from './pages/MediaNews';
import PatientStories from './pages/PatientStories';
import ServiceTemplatePage from './components/utilities/services/ServiceTemplatePage';
import Layout from './components/layout/Layout';




const useScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};


const App: React.FC = () => {
  useScrollToTop()
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path="/services/:id" element={<ServiceTemplatePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/media-news' element={<MediaNews />} />
        <Route path='/patient-stories' element={<PatientStories />} />
      </Routes>
    </Layout>
  );
}

export default App;
