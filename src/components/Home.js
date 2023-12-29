import React from 'react';
import SlidePage from './SlidePage';

const Home = () => {
  return (
    <div>
      <SlidePage images={['https://www.arrosage-distribution.fr/media/wp/slide1.jpg', 'https://www.arrosage-distribution.fr/media/wp/slide2.jpg']} />
      <h2>AQUAGREEN est spécialisé dans deux domaines :</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>
          <p>
            AQUAGREEN est spécialisé dans deux domaines, <strong>l'arrosage et le pompage</strong>, qui représentent actuellement un enjeu économique et environnemental considérable. En effet, la gestion de l'eau doit être maîtrisée avec pragmatisme et intelligence, car cette ressource naturelle n'est pas inépuisable. Notre connaissance métier nous permet de vous proposer une gamme de produits sélectionnés avec intransigeance, et un conseil d'expert pour vous guider dans le choix de votre équipement de pompage et votre installation d'arrosage.
          </p>
          <ul>
            <li>Approvisionnement en équipements d'irrigation haut de gamme</li>
            <li>Fourniture de solutions de gestion de l'eau pour les espaces verts</li>
          </ul>
        </div>
        <div>
          <strong>Matériel professionnel :</strong>
          <br />
          Nous distribuons aux particuliers et aux professionnels tout le matériel nécessaire à leurs installations d'arrosage, de pompage et de filtration. Dans chaque catégorie, nous vous proposons une gamme pointue mais exhaustive pour répondre à vos besoins : <strong>matériel pour l'arrosage automatique</strong> et l'arrosage goutte à goutte, pompe de surface, pompe de forage, pompe vide cave, station de relevage, récupérateur d'eau de pluie, pompe doseuse, etc. Les équipements sont résistants et puissants pour vous permettre d'accroître la rentabilité de votre activité, dans le respect de l'eau et de ceux qui la consomment.
        </div>
      </div>
      
    </div>
  );
};

export default Home;

