const fs = require('fs');


const filePath = 'planets/planets.txt';


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }


  const planets = data.split(',').map(planet => planet.trim());


  planets.forEach(planet => console.log(planet));
});

