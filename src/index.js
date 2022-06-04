import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Nav from './components/Nav/Nav';
import FamousPlaces from './pages/FamousPlaces/FamousPlaces'
import Episodes from './pages/Episodes/Episodes'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/famous-places" element={<FamousPlaces />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
