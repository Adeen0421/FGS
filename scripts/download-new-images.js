const https = require('https');
const fs = require('fs');
const path = require('path');

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, '../public/gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// 6 new high-quality school images
const newImages = [
  {
    filename: 'school-building.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    alt: 'School Building'
  },
  {
    filename: 'library-books.jpg',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop&crop=center',
    alt: 'Library with Books'
  },
  {
    filename: 'science-experiment.jpg',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&crop=center',
    alt: 'Science Experiment'
  },
  {
    filename: 'sports-activity.jpg',
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
    alt: 'Sports Activity'
  },
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

async function downloadNewImages() {
  console.log('🚀 Starting download of 6 new school images...\n');
  
  for (const image of newImages) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`❌ Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('\n🎉 New school images download complete!');
  console.log(`📁 Images saved to: ${galleryDir}`);
  console.log('\n📋 New images:');
  newImages.forEach(img => {
    console.log(`   - ${img.filename} (${img.alt})`);
  });
}

downloadNewImages().catch(console.error); 