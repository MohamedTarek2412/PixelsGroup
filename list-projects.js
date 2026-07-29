const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'public', 'assets', 'projects');

try {
  const folders = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const data = folders.map(folder => {
    const folderPath = path.join(projectsDir, folder);
    const files = fs.readdirSync(folderPath).filter(file => file.match(/\.(jpg|jpeg|png|webp|avif)$/i));
    return {
      name: folder,
      images: files.map(f => `/assets/projects/${folder}/${f}`)
    };
  });

  console.log(JSON.stringify(data, null, 2));
} catch (e) {
  console.error(e);
}
