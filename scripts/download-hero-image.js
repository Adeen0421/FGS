const https = require('https');
const fs = require('fs');
const path = require('path');

// High-quality campus image from Unsplash
const imageUrl = 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop';
const filename = 'hero-image.jpg';

const downloadImage = () => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '../public', filename);
    const file = fs.createWriteStream(filepath);

    https.get(imageUrl, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

downloadImage().catch(console.error); 