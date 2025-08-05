const https = require('https');
const fs = require('fs');
const path = require('path');

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, '../public/gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// High-quality campus images from Unsplash
const images = [
  {
    filename: 'campus-1.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    alt: 'Modern Campus Building'
  },
  {
    filename: 'library.jpg',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop&crop=center',
    alt: 'Well-equipped Library'
  },
  {
    filename: 'lab.jpg',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&crop=center',
    alt: 'Science Laboratory'
  },
  {
    filename: 'sports.jpg',
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
    alt: 'Sports Facilities'
  },
  {
    filename: 'classroom.jpg',
    url: 'https://images.unsplash.com/photo-1523240797355-3516d8a4c9c6?w=800&h=600&fit=crop&crop=center',
    alt: 'Interactive Classroom'
  },
  {
    filename: 'activities.jpg',
    url: 'https://images.unsplash.com/photo-1523240797355-3516d8a4c9c6?w=800&h=600&fit=crop&crop=center',
    alt: 'Student Activities'
  },
  {
    filename: 'campus-aerial.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    alt: 'Aerial View of Campus'
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
    filename: 'campus-entrance.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    alt: 'Campus Entrance'
  },
  {
    filename: 'study-area.jpg',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop&crop=center',
    alt: 'Study Area'
  },
  {
    filename: 'cafeteria.jpg',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&crop=center',
    alt: 'Cafeteria'
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

async function downloadAllImages() {
  console.log('🚀 Starting download of campus gallery images...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`❌ Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('\n🎉 Gallery images download complete!');
  console.log(`📁 Images saved to: ${galleryDir}`);
  console.log('\n📋 Available images:');
  images.forEach(img => {
    console.log(`   - ${img.filename} (${img.alt})`);
  });
}

downloadAllImages().catch(console.error); 