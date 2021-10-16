const axios = require('axios')
/* axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${process.env.TODOIST_TOKEN}`
*/
const cookieUrl = 'app/search/VCS'
const request = axios.create({
  baseURL: 'https://registry.verra.org/',
  withCredentials: true
})
async function fetchProjects () {
  try {
    const response = await request.get(cookieUrl)
    if (response.status == 200) {
      console.log(`response.data ---> : ${response.data}`)
      // const cookieClient.save('cookie-name', response.data, { path: '/' })
    }
    console.log(`response : ${JSON.stringify(response, null, 2)}`)
    
    process.exit()
    const sResponse = await request.get(
      'uiapi/resource/resource/search?maxResults=2000&$count=true&$skip=0&$top=50'
    )
    if (sResponse.status === 200) {
      // const tasks = formatProjects(response.data)
      console.log(`projects : ${JSON.stringify(tasks, null, 2)}`)

      return tasks
    } else {
      throw new Error('response.status', response.status)
    }
  } catch (error) {
    console.error(error)
  }
}

fetchProjects()
