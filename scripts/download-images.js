const https = require('https')
const fs = require('fs')
const path = require('path')

const images = [
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    filename: 'hero-image.jpg',
    description: 'Students studying in library',
  },
  {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
    filename: 'about-hero.jpg',
    description: 'School campus',
  },
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    filename: 'mission-image.jpg',
    description: 'Students collaborating',
  },
  {
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45',
    filename: 'admission-image.jpg',
    description: 'Students in classroom',
  },
]

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const publicDir = path.join(process.cwd(), 'public')
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir)
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
    console.log('All images downloaded successfully!')
  } catch (error) {
    console.error('Error downloading images:', error)
  }
}

downloadAllImages() 