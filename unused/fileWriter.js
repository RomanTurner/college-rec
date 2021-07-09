const fs = require("fs");
const fetch = require("node-fetch");

const fileWriter = (jsonData) => {
 fs.writeFile('data.json', jsonData, 'utf8', (err) => {
     if (err) throw err;
    console.log('File created!')
  })
}

fetch("https://college-rec-system.herokuapp.com/colleges/").then(res=> res.json()).then(data => fileWriter(data));


