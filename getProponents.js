const { vcs } = require('./vcs/vcs')

let proponentsObj = {}

const proponents = vcs.value.map(o => o.proponent)
proponents.forEach(proponent => {
  proponentsObj[proponent] = proponent
});
console.log(`proponentsObj : ${JSON.stringify(proponentsObj, null, 2)}`)
