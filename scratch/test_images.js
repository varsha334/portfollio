const http = require('http');

const urls = [
  'http://localhost:8000/images/Dalmia%20Grower%20App/Landing_Page.png',
  'http://localhost:8000/images/Market%20Place/Grower%20Dashboard.png',
  'http://localhost:8000/images/Dalmia%20Grower%20App/Add_New_Indent%20Round%20Mapping.png',
  'http://localhost:8000/images/Market%20Place/3.%20Opening%20UPI%20App-1.png'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      console.log(`[CHECK] ${url} => status: ${res.statusCode}`);
      resolve(res.statusCode);
    }).on('error', (err) => {
      console.error(`[ERROR] ${url} => ${err.message}`);
      resolve(500);
    });
  });
}

async function run() {
  for (const url of urls) {
    await checkUrl(url);
  }
}

run();
