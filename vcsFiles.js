const fs = require('fs').promises;

// directory path
const dir = './vcs/';
let proponentsObj = {}

async function readFiles () {
  console.log(`fs.readdir ---> : ${fs.readdir}`)
  // list all files in the directory
  const files = await fs.readdir(dir);
  files.forEach(file => {
    console.log(file);
    const { vcs } = require(dir+'/'+file)
    

    const proponents = vcs.value.map(o => o.proponent)
    proponents.forEach(proponent => {
      proponentsObj[proponent] = proponentsObj[proponent] ? proponentsObj[proponent] : {} 
      proponentsObj[proponent].proponent = proponent
      proponentsObj[proponent].count = proponentsObj[proponent].count ? (proponentsObj[proponent].count + 1) : 1
    });
    
  });
  console.log(`files : ${JSON.stringify(files, null, 2)}`)
  
  console.log(`proponentsObj : ${JSON.stringify(proponentsObj, null, 2)}`)

}

readFiles()
