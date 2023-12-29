// src/components/Produit.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';  // Ajustez le chemin selon votre structure de projet

const Produit = () => {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);

  useEffect(() => {
    // Utilisez directement les données importées depuis le fichier products.js
    const selectedProduit = products.find(prod => prod.id === parseInt(id, 10));
    setProduit(selectedProduit);
  }, [id]);

  if (!produit) {
    return <div>Chargement...</div>;
  }

  const { nom, description, image, prix, stock } = produit;

  return (
    <div>
      <h2>{nom}</h2>
      <img src={image} alt={nom} />
      <p>{description}</p>
      <p>Prix: {prix} €</p>
      <p>Stock: {stock}</p>
      {/* Autres détails du produit */}
    </div>
  );
};

export default Produit;
