const https = require('https');
const fs = require('fs');
const path = require('path');

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, '../public/gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Diverse high-quality school/campus images from Unsplash
const schoolImages = [
  {
    filename: 'modern-campus.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    alt: 'Modern Campus Building'
  },
  {
    filename: 'library-interior.jpg',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop&crop=center',
    alt: 'Library Interior'
  },
  {
    filename: 'science-lab.jpg',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&crop=center',
    alt: 'Science Laboratory'
  },
  {
    filename: 'basketball-court.jpg',
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
    alt: 'Basketball Court'
  },
  {
    filename: 'classroom-students.jpg',
    url: 'https://images.unsplash.com/photo-1523240797355-3516d8a4c9c6?w=800&h=600&fit=crop&crop=center',
    alt: 'Classroom with Students'
  },
  {
    filename: 'computer-class.jpg',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center',
    alt: 'Computer Class'
  },
  {
    filename: 'art-room.jpg',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center',
    alt: 'Art Room'
  },
  {
    filename: 'music-room.jpg',
    url: 'https://images.unsplash.com/photo-1523240797355-3516d8a4c9c6?w=800&h=600&fit=crop&crop=center',
    alt: 'Music Room'
  },
  {
    filename: 'cafeteria-dining.jpg',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&crop=center',
    alt: 'Cafeteria Dining Area'
  },
  {
    filename: 'study-hall.jpg',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop&crop=center',
    alt: 'Study Hall'
  },
  {
    filename: 'auditorium-stage.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    alt: 'Auditorium Stage'
  },
  {
    filename: 'gym-facility.jpg',
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
    alt: 'Gym Facility'
  },
  {
    filename: 'campus-garden.jpg',
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center',
    alt: 'Campus Garden'
  },
  {
    filename: 'student-lounge.jpg',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop&crop=center',
    alt: 'Student Lounge'
  },
  {
    filename: 'chemistry-lab.jpg',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&crop=center',
    alt: 'Chemistry Laboratory'
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

async function downloadSchoolImages() {
  console.log('🚀 Starting download of diverse school gallery images...\n');
  
  for (const image of schoolImages) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`❌ Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('\n🎉 School gallery images download complete!');
  console.log(`📁 Images saved to: ${galleryDir}`);
  console.log('\n📋 Available school images:');
  schoolImages.forEach(img => {
    console.log(`   - ${img.filename} (${img.alt})`);
  });
}

downloadSchoolImages().catch(console.error); 