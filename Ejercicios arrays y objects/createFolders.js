const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 30; i++) {
    const folderName = `ejercicio${i}`;
    const folderPath = path.join(__dirname, folderName);

    // Crear carpeta
    fs.mkdirSync(folderPath, { recursive: true });

    // Crear index.html
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ejercicio ${i}</title>
        <script src="./index.js" defer></script>
    </head>
    <body>
        <h1>Ejercicio ${i}</h1>
    </body>
    </html>`;
    fs.writeFileSync(path.join(folderPath, 'index.html'), htmlContent);

    // Crear index.js
    const jsContent = `console.log('Ejercicio ${i}');`;
    fs.writeFileSync(path.join(folderPath, 'index.js'), jsContent);
}

console.log('Carpetas y archivos creados correctamente.');
