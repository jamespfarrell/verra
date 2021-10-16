const axios = require('axios')
const { readFiles} = require('./files')
const { getProponentFromParticipationSummaries } = require('./vcs')
const request = axios.create({
  baseURL: 'https://registry.verra.org/uiapi/resource/resourceSummary/'
})

//const proponents = vcs.value.map(o => o.proponent)
const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

// console.log(`vcs : ${JSON.stringify(vcs, null, 2)}`)
var wait = ms => new Promise((r, j) => setTimeout(r, ms))

async function fetchProjectDetails (projectId) {
  try {
    const response = await request.get(projectId)
    if (response.status == 200) {
      //console.log(`response.data : ${JSON.stringify(response.data, null, 2)}`)
      return response.data
      // const cookieClient.save('cookie-name', response.data, { path: '/' })
    } else {
      throw new Error('response.status', response.status)
    }
  } catch (error) {
    console.error(error)
  }
}
function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
async function fetchProjects () {
  const vcs = await readFiles()
  //console.log(`vcs : ${JSON.stringify(vcs, null, 2)}`)
  //const projectIds = vcs.value.map(o => o.resourceIdentifier)

  const propers = []
  for (const projectId in vcs) {
    
    await wait(3000)
    console.log(`projectId ---> : ${projectId}`)
    const project = await fetchProjectDetails(projectId)
    
    //console.log(`participationSummaries : ${JSON.stringify(project.participationSummaries, null, 2)}`)
    const proponents = getProponentFromParticipationSummaries(project.participationSummaries)

    
    const properProp = {}
    properProp.text = []

    proponents.forEach(prop => {
      
      if(prop.indexOf('@') > -1) {
        properProp.email = prop
      } else if(isNumeric(prop)) {
        properProp.phone = prop
      } else if(prop.indexOf('www.') > -1) {
        properProp.website = prop
      } else {
        properProp.text.push(prop)
      }
      
      
    })
    propers.push( properProp)
    console.log(`propers : ${JSON.stringify(propers, null, 2)}`)
  }
  
    
 
}
fetchProjects()
