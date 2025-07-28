const https = require('https')
const fs = require('fs')
const path = require('path')

const images = [
  // Achievements
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    filename: 'achievements/academic.jpg',
    description: 'Academic achievement',
  },
  {
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
    filename: 'achievements/sports.jpg',
    description: 'Sports achievement',
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    filename: 'achievements/innovation.jpg',
    description: 'Innovation achievement',
  },

  // Events
  {
    url: 'https://images.unsplash.com/photo-1610433572201-110753c6cff9',
    filename: 'events/science-fair.jpg',
    description: 'Science fair',
  },
  {
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754',
    filename: 'events/ptm.jpg',
    description: 'Parent teacher meeting',
  },
  {
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
    filename: 'events/cultural.jpg',
    description: 'Cultural event',
  },

  // Gallery
  {
    url: 'https://images.unsplash.com/photo-1562774053-701939374585',
    filename: 'gallery/campus-1.jpg',
    description: 'Campus building',
  },
  {
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da',
    filename: 'gallery/library.jpg',
    description: 'Library',
  },
  {
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    filename: 'gallery/lab.jpg',
    description: 'Laboratory',
  },
  {
    url: 'https://images.unsplash.com/photo-1577412647305-991150c7d163',
    filename: 'gallery/sports.jpg',
    description: 'Sports facilities',
  },
  {
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b',
    filename: 'gallery/classroom.jpg',
    description: 'Classroom',
  },
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    filename: 'gallery/activities.jpg',
    description: 'Student activities',
  },

  // Campus Life
  {
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45',
    filename: 'campus/academic.jpg',
    description: 'Academic life',
  },
  {
    url: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4',
    filename: 'campus/sports.jpg',
    description: 'Sports life',
  },
  {
    url: 'https://images.unsplash.com/photo-1598386651573-9232cc0c2d6c',
    filename: 'campus/arts.jpg',
    description: 'Arts and culture',
  },
]

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const publicDir = path.join(process.cwd(), 'public')
    const fileDir = path.join(publicDir, path.dirname(filename))

    // Create directories if they don't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir)
    }
    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true })
    }

    const filepath = path.join(publicDir, filename)
    const file = fs.createWriteStream(filepath)

    https
      .get(`${url}?w=1920&q=80`, (response) => {
        response.pipe(file)
        file.on('finish', () => {
          file.close()
          console.log(`Downloaded ${filename}`)
          resolve()
        })
      })
      .on('error', (err) => {
        fs.unlink(filepath, () => {})
        console.error(`Error downloading ${filename}:`, err.message)
        reject(err)
      })
  })
}

async function downloadAllImages() {
  try {
    await Promise.all(images.map((img) => downloadImage(img.url, img.filename)))
    console.log('All additional images downloaded successfully!')
  } catch (error) {
    console.error('Error downloading images:', error)
  }
}

downloadAllImages() 