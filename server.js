const express = require('express');
const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Données provenant du backend' });
});

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur http://localhost:${port}`);
});
