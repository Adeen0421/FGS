const fs = require('fs');
const https = require('https');
const path = require('path');

// URL of a relevant academic support/tutoring image
const imageUrl = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80';

// Create the public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Download the image
const filePath = path.join(publicDir, 'academic-support-new.jpg');
const file = fs.createWriteStream(filePath);

https.get(imageUrl, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Image downloaded successfully!');
  });
}).on('error', (err) => {
  fs.unlink(filePath);
  console.error('Error downloading image:', err.message);
});
