const { start } = require('repl');

const fs = require('fs').promises;

// directory path
const dir = './vcs/';
let proponentsObj = {}

async function readFiles () {
  
  // list all files in the directory
  const files = await fs.readdir(dir)

  files.forEach(file => {
    
    const { vcs } = require(dir+'/'+file)
    
  //  const testA = vcs.value.filter(o => o.id === '2259').length // 1
  //  const testB = vcs.value.filter(o => o.id === '2263').length // 2

  //  console.log(`testA ---> : ${testA}`)
  //  console.log(`testB ---> : ${testB}`)
  //  process.exit()

    const proponents = vcs.value.map(o => {
      return {
        proponent: o.proponent,
        id: o.resourceIdentifier
      }
    })
    
    proponents.forEach(proponent => {
      proponentsObj[proponent.id] = proponentsObj[proponent.id] ? proponentsObj[proponent.id] : {} 
      proponentsObj[proponent.id].proponent = proponent.proponent
      proponentsObj[proponent.id].count = proponentsObj[proponent.id].count ? (proponentsObj[proponent.id].count + 1) : 1
    });
    
  });
  
  return proponentsObj
}

async function go() {
  const vcs = await readFiles()
  //console.log(`vcs : ${JSON.stringify(vcs, null, 2)}`)
  for (const project in vcs) {
    //https://registry.verra.org/app/projectDetail/VCS/1364
    
  }
  
}
//go()
module.exports = {
  readFiles
}