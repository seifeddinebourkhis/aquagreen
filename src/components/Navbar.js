import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Ajoutez votre logique de recherche ici avec la valeur de searchTerm
    console.log('Rechercher :', searchTerm);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          AQUAGREEN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/produit">
                Produit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/etudes">
                Études
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Rechercher"
                  aria-label="Rechercher"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Rechercher
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
