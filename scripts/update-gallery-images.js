const https = require('https');
const fs = require('fs');
const path = require('path');

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, '../public/gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Use existing images from public/gallery folder
const galleryImages = [
  {
    src: '/gallery/art-studio.jpg',
    alt: 'Art Studio'
  },
  {
    src: '/gallery/auditorium.jpg',
    alt: 'School Auditorium'
  },
  {
    src: '/gallery/chemistry-lab.jpg',
    alt: 'Chemistry Laboratory'
  },
  {
    src: '/gallery/library.jpg',
    alt: 'School Library'
  },
  {
    src: '/gallery/music-class.jpg',
    alt: 'Music Classroom'
  },
  {
    src: '/gallery/SPORTS.jpg',
    alt: 'Sports Activities'
  }
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(galleryDir, filename);
    const file = fs.createWriteStream(filePath);

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

async function downloadAllImages() {
  console.log('🚀 Starting download of updated gallery images...\n');
  
  for (const image of newImages) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`❌ Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('\n🎉 Updated gallery images download complete!');
  console.log(`📁 Images saved to: ${galleryDir}`);
  console.log('\n📋 New images available:');
  newImages.forEach(img => {
    console.log(`   - ${img.filename} (${img.alt})`);
  });
}

downloadAllImages().catch(console.error);
