import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const assets = [
  {
    url: 'https://summerofcode.withgoogle.com/assets/media/logo.svg',
    dest: 'public/assets/media/logo.svg'
  },
  {
    url: 'https://summerofcode.withgoogle.com/assets/media/gray-google-word-logo.svg',
    dest: 'public/assets/media/gray-google-word-logo.svg'
  },
  {
    url: 'https://summerofcode.withgoogle.com/assets/favicons/favicon.ico',
    dest: 'public/assets/favicons/favicon.ico'
  },
  {
    url: 'https://summerofcode.withgoogle.com/assets/favicons/favicon-32x32.png',
    dest: 'public/assets/favicons/favicon-32x32.png'
  },
  {
    url: 'https://summerofcode.withgoogle.com/assets/favicons/favicon-16x16.png',
    dest: 'public/assets/favicons/favicon-16x16.png'
  },
  {
    url: 'https://summerofcode.withgoogle.com/assets/favicons/apple-touch-icon.png',
    dest: 'public/assets/favicons/apple-touch-icon.png'
  },
  {
    url: 'https://summerofcode.withgoogle.com/assets/favicons/safari-pinned-tab.svg',
    dest: 'public/assets/favicons/safari-pinned-tab.svg'
  },
  {
    url: 'https://summerofcode.withgoogle.com/assets/favicons/site.webmanifest',
    dest: 'public/assets/favicons/site.webmanifest'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve(dest));
        });
      } else {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`Failed to download ${url}: Status code ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading GSoC assets...');
  for (const asset of assets) {
    try {
      await download(asset.url, asset.dest);
      console.log(`✓ Downloaded ${asset.dest}`);
    } catch (e) {
      console.warn(`✗ ${e.message}`);
    }
  }
  console.log('Done downloading assets.');
}

run();
