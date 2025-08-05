const https = require('https');
const fs = require('fs');
const path = require('path');

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, '../public/gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// 2 missing images with working URLs
const missingImages = [
  {
    filename: 'classroom-learning.jpg',
    url: 'https://images.unsplash.com/photo-1523240797355-3516d8a4c9c6?w=800&h=600&fit=crop&crop=center',
    alt: 'Classroom Learning'
  },
  {
    filename: 'campus-life.jpg',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center',
    alt: 'Campus Life'
  }
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(galleryDir, filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadMissingImages() {
  console.log('🚀 Starting download of missing images...\n');
  
  for (const image of missingImages) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`❌ Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('\n🎉 Missing images download complete!');
  console.log(`📁 Images saved to: ${galleryDir}`);
}

downloadMissingImages().catch(console.error); 