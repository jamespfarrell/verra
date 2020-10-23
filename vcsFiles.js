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
    
   const testA = vcs.value.map(o => o.id === '2259').length // 1
   const testB = vcs.value.map(o => o.id === '2263').length // 2

   console.log(`testA ---> : ${testA}`)
   console.log(`testB ---> : ${testB}`)
   process.exit()
    const proponents = vcs.value.map(o => {
      return {
        proponent: o.proponent,
        id: o.resourceIdentifier
      }
    })
    console.log(`proponents : ${JSON.stringify(proponents, null, 2)}`)
    console.log(`proponents : ${JSON.stringify(proponents, null, 2)}`)
    
    proponents.forEach(proponent => {
      proponentsObj[proponent.id] = proponentsObj[proponent.id] ? proponentsObj[proponent.id] : {} 
      proponentsObj[proponent.id].proponent = proponent.proponent
      proponentsObj[proponent.id].count = proponentsObj[proponent.id].count ? (proponentsObj[proponent.id].count + 1) : 1
    });
    
  });
  console.log(`proponentsObj : ${JSON.stringify(proponentsObj, null, 2)}`)

}

readFiles()
