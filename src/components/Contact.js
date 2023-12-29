// src/components/Contact.js
import React from 'react';
import './Contact.css';  // Importez le fichier CSS


const Contact = () => {
  return (
    <div>
      <h2>Nous Contacter</h2>
      <p>Bienvenue sur notre page de contact. N'hésitez pas à nous envoyer un message pour toute question ou préoccupation.</p>

      {/* Formulaire de contact (à ajouter selon vos besoins) */}
      <form>
        <label>Nom:</label>
        <input type="text" name="nom" />

        <label>Email:</label>
        <input type="email" name="email" />

        <label>Message:</label>
        <textarea name="message" rows="4" />

        <button type="submit">Envoyer</button>
      </form>

      {/* Coordonnées de contact (à ajouter selon vos besoins) */}
      <div>
        <h3>Nos Coordonnées</h3>
        <p>Email: aquagreennabeul@yahoo.com</p>
        <p>Téléphone: +216 21 650 460</p>
        {/* Ajoutez d'autres informations de contact au besoin */}
      </div>
    </div>
  );
};

export default Contact;
