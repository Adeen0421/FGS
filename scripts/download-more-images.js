const https = require('https');
const fs = require('fs');
const path = require('path');

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, '../public/gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Additional high-quality campus images with working URLs
const additionalImages = [
  {
    filename: 'classroom.jpg',
    url: 'https://images.unsplash.com/photo-1523240797355-3516d8a4c9c6?w=800&h=600&fit=crop&crop=center',
    alt: 'Interactive Classroom'
  },
  {
    filename: 'computer-lab.jpg',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center',
    alt: 'Computer Laboratory'
  },
  {
    filename: 'art-studio.jpg',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center',
    alt: 'Art Studio'
  },
  {
    filename: 'activities.jpg',
    url: 'https://images.unsplash.com/photo-1523240797355-3516d8a4c9c6?w=800&h=600&fit=crop&crop=center',
    alt: 'Student Activities'
  },
  {
    filename: 'auditorium.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    alt: 'School Auditorium'
  },
  {
    filename: 'gymnasium.jpg',
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
    alt: 'Gymnasium'
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

async function downloadAdditionalImages() {
  console.log('🚀 Starting download of additional campus gallery images...\n');
  
  for (const image of additionalImages) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`❌ Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('\n🎉 Additional gallery images download complete!');
  console.log(`📁 Images saved to: ${galleryDir}`);
}

downloadAdditionalImages().catch(console.error); 