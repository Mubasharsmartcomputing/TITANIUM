const sharp = require('sharp');
const path = require('path');

async function optimizeImage() {
  const inputPath = './src/assets/img/rightImage4.png';
  const outputPath = './src/assets/img/rightImage4-optimized.png';
  
  try {
    await sharp(inputPath)
      .resize(400, null, { // Resize to max width 400px, maintain aspect ratio
        withoutEnlargement: true
      })
      .png({ 
        quality: 80,
        compressionLevel: 9
      })
      .toFile(outputPath);
    
    console.log('Image optimized successfully!');
    console.log(`Original: ${inputPath}`);
    console.log(`Optimized: ${outputPath}`);
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();