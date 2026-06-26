const fs = require('fs');
const path = require('path');

global.window = {
    addEventListener: () => {},
    localStorage: {
        getItem: () => null,
        setItem: () => null
    }
};
global.document = {
    body: {
        classList: {
            add() {},
            remove() {}
        }
    },
    addEventListener: () => {}
};
global.localStorage = global.window.localStorage;

const scriptPath = path.resolve(__dirname, '..', 'js', 'script.js');
let scriptCode = fs.readFileSync(scriptPath, 'utf8');
scriptCode = scriptCode.replace('const projects =', 'global.projects =');

eval(scriptCode);

console.log("PROJECT 1 SLIDES (Dalmia):");
global.projects.find(p => p.id === 1).slides.slice(0, 3).forEach(s => console.log(s));

console.log("\nPROJECT 5 SLIDES (Market Place):");
global.projects.find(p => p.id === 5).slides.slice(0, 3).forEach(s => console.log(s));
