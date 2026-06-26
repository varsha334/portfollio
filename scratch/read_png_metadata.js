const fs = require('fs');
const path = require('path');

const graphicsDir = path.resolve(__dirname, '..', 'images', 'Graphics');
const files = fs.readdirSync(graphicsDir).filter(f => f.toLowerCase().endsWith('.png'));

files.forEach(file => {
    const filePath = path.join(graphicsDir, file);
    const buffer = fs.readFileSync(filePath);
    
    console.log(`\n=== File: ${file} ===`);
    
    let i = 8; // Skip PNG signature
    while (i < buffer.length - 8) {
        const length = buffer.readUInt32BE(i);
        const chunkType = buffer.toString('ascii', i + 4, i + 8);
        
        if (chunkType === 'tEXt' || chunkType === 'iTXt' || chunkType === 'zTXt') {
            const chunkData = buffer.slice(i + 8, i + 8 + length);
            // Parse tEXt chunk: keyword\0text
            const nullByteIdx = chunkData.indexOf(0);
            if (nullByteIdx !== -1) {
                const keyword = chunkData.toString('utf8', 0, nullByteIdx);
                let text = '';
                if (chunkType === 'tEXt') {
                    text = chunkData.toString('utf8', nullByteIdx + 1);
                } else if (chunkType === 'zTXt') {
                    // Compressed text, we can skip or try to decompress, but let's print keyword
                    text = '[Compressed]';
                } else {
                    text = chunkData.toString('utf8', nullByteIdx + 1);
                }
                console.log(`  [${chunkType}] ${keyword}: ${text.substring(0, 300)}`);
            }
        }
        
        i += 12 + length; // chunk length (4) + chunk type (4) + data (length) + CRC (4)
    }
});
