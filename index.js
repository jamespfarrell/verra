const { vcs } = require('./vcs')
const axios = require('axios')
const request = axios.create({
  baseURL: 'https://registry.verra.org/uiapi/resource/resourceSummary/'
})
console.log(`vcs : ${JSON.stringify(vcs, null, 2)}`)

const proponents = vcs.value.map(o => o.proponent)
const unique = (value, index, self) => {
  return self.indexOf(value) === index
}
console.log(
  ` ages.filter(unique) : ${JSON.stringify(proponents.filter(unique), null, 2)}`
)

// console.log(`vcs : ${JSON.stringify(vcs, null, 2)}`)
var wait = ms => new Promise((r, j) => setTimeout(r, ms))

async function fetchProjectDetails (projectId) {
  try {
    const response = await request.get(projectId)
    if (response.status == 200) {
      console.log(`response.data : ${JSON.stringify(response.data, null, 2)}`)
      //return response.data
      // const cookieClient.save('cookie-name', response.data, { path: '/' })
    } else {
      throw new Error('response.status', response.status)
    }
  } catch (error) {
    console.error(error)
  }
}
async function fetchProjects () {
  const projectIds = vcs.value.map(o => o.resourceIdentifier)
  threeProjectIds = projectIds.slice(0, 2)
  console.log(`projectIds : ${JSON.stringify(threeProjectIds, null, 2)}`)

  for (let index = 0; index < threeProjectIds.length; index++) {
    await wait(3000)
    projectId = threeProjectIds[index]
    console.log(`projectId ---> : ${projectId}`)
    const details = fetchProjectDetails(projectId)
    console.log(`details : ${JSON.stringify(details, null, 2)}`)
      
  }
}
fetchProjects()
