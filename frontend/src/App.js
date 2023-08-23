
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';


import ContactoPage from './pages/ContactoPage'
import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import NovedadesPage from './pages/NovedadesPage'
import ProductosPage from './pages/ProductosPage';
import RecetasPage from './pages/RecetasPage';



function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/novedades" element={<NovedadesPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/recetas" element={<RecetasPage />} />
        

      </Routes>
      </BrowserRouter>
      
      <hr />
      <Footer />
    </div>
  );
}

export default App;
