const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrls = [
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    filename: 'modern-facilities.jpg',
    alt: 'Modern classroom with students using technology'
  },
  {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    filename: 'expert-faculty.jpg',
    alt: 'Teacher engaging with students in a collaborative environment'
  },
  {
    url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop',
    filename: 'personalized-learning.jpg',
    alt: 'Student receiving one-on-one mentoring'
  },
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    filename: 'global-perspective.jpg',
    alt: 'Diverse group of students collaborating'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, '../public/images/features', filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
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

async function downloadAllImages() {
  try {
    for (const image of imageUrls) {
      await downloadImage(image.url, image.filename);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages(); 