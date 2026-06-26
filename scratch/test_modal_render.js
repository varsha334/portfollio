const fs = require('fs');
const path = require('path');

// Mock a minimal DOM environment
const domMock = {
    body: {
        style: {
            overflow: ''
        },
        classList: {
            add(cls) {},
            remove(cls) {}
        }
    },
    getElementById: (id) => {
        return {
            id,
            style: { display: 'none' },
            innerHTML: '',
            appendChild(child) {
                this.children = this.children || [];
                this.children.push(child);
            },
            classList: {
                add(cls) {
                    // console.log(`classList.add(${cls})`);
                }
            },
            addEventListener(event, callback) {
                // console.log(`addEventListener(${event})`);
            }
        };
    },
    querySelectorAll: (selector) => {
        return [];
    },
    createElement: (tag) => {
        return {
            tagName: tag,
            style: {},
            classList: {
                add(cls) {
                    this.className = this.className ? this.className + ' ' + cls : cls;
                }
            },
            appendChild(child) {
                this.children = this.children || [];
                this.children.push(child);
            },
            addEventListener(event, callback) {
                // console.log(`addEventListener(${event})`);
            }
        };
    },
    addEventListener: () => {}
};

global.window = {
    addEventListener: () => {},
    localStorage: {
        getItem: () => null,
        setItem: () => null
    }
};
global.document = domMock;
global.localStorage = global.window.localStorage;

// Load script.js file content
const scriptPath = path.resolve(__dirname, '..', 'js', 'script.js');
let scriptCode = fs.readFileSync(scriptPath, 'utf8');

// Expose projects and functions globally
scriptCode = scriptCode.replace('const projects =', 'global.projects =');
scriptCode = scriptCode.replace('function initProjectModal() {', 'function initProjectModal() { global.openProjectModal = openProjectModal;');

// Clear global so we don't conflict
global.openProjectModal = null;

try {
    eval(scriptCode);
    // Call initProjectModal to bind global.openProjectModal
    if (typeof initProjectModal === 'function') {
        // Mock DOMContentLoaded elements
        const modal = domMock.getElementById("projectModal");
        const modalClose = domMock.getElementById("modalClose");
        const modalBody = domMock.getElementById("modalBody");
        const modalLoading = domMock.getElementById("modalLoading");
        
        // We override document.getElementById to return our mocks
        document.getElementById = (id) => {
            if (id === 'projectModal') return modal;
            if (id === 'modalClose') return modalClose;
            if (id === 'modalBody') return modalBody;
            if (id === 'modalLoading') return modalLoading;
            return { style: {} };
        };
        
        initProjectModal();
        console.log("initProjectModal completed!");
        
        if (typeof global.openProjectModal === 'function') {
            console.log("openProjectModal is exposed!");
            
            // Let's test id = 1 (Dalmia)
            const body1 = document.getElementById("modalBody");
            body1.children = [];
            global.openProjectModal(1);
            console.log("\n--- TEST PROJECT 1 (DALMIA) ---");
            console.log("Slides count:", global.projects.find(p => p.id === 1).slides.length);
            console.log("Body children count:", body1.children.length);
            
            // Let's test id = 5 (Market Place)
            const body5 = document.getElementById("modalBody");
            body5.children = [];
            global.openProjectModal(5);
            console.log("\n--- TEST PROJECT 5 (MARKET PLACE) ---");
            console.log("Slides count:", global.projects.find(p => p.id === 5).slides.length);
            console.log("Body children count:", body5.children.length);
        } else {
            console.error("openProjectModal is NOT exposed!");
        }
    }
} catch (e) {
    console.error("Test execution failed:", e);
}
