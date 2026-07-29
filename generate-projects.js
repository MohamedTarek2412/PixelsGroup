const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'public', 'assets', 'projects');

try {
  const folders = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const projects = folders.map((folder, idx) => {
    const folderPath = path.join(projectsDir, folder);
    const files = fs.readdirSync(folderPath).filter(file => file.match(/\.(jpg|jpeg|png|webp|avif)$/i));
    return {
      id: `project-${idx + 1}`,
      title: folder,
      location: "",
      type: "تشطيبات وتصميم",
      area: "",
      images: files.map(f => `/assets/projects/${folder}/${f}`)
    };
  });

  const output = `export const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};`;
  fs.writeFileSync('generated-projects.txt', output);
  console.log('Success');
} catch (e) {
  console.error(e);
}
