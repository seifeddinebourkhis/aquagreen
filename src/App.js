import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Etudes from './components/Etudes'; // Importez le composant Etudes
import Contact from './components/Contact'; // Importez le composant Contact
import Produit from './components/Produit';
import SlidePage from './components/SlidePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        // Modifiez votre route "/" comme ceci :
          <Route path="/" element={<Home />} />

                {/* Modifiez la route pour SlidePage comme ceci */}
      <Route path="/slide" element={<SlidePage />} />

{/* Ajoutez les routes pour produit, etudes, contact ici */}
<Route path="/produit/:id" element={<Produit />} />
<Route path="/etudes" element={<Etudes />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</div>
</Router>

  );
};

export default App;
