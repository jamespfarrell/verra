/* fetch("https://registry.verra.org/uiapi/resource/resource/search?maxResults=2000&$count=true&$skip=0&$top=50", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,en-AU;q=0.7,th;q=0.6",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://registry.verra.org/app/search/VCS/All%20Projects",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"program\":\"VCS\",\"resourceStatuses\":[\"VCS_EX_CRED_TRANS_FRM_OTHER_PROG\",\"VCS_EX_REGISTERED\",\"VCS_EX_REG_VER_APPR_REQUESTED\",\"VCS_EX_REGISTRATION_REQUESTED\",\"VCS_EX_UNDER_DEVELOPMENT\",\"VCS_EX_UNDER_VALIDATION\",\"VCS_EX_WITHDRAWN\"]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});*/
const axios = require('axios')
// const request = axios.create({
//   baseURL: 'https://registry.verra.org/uiapi/resource/'
// })
const request = axios.create({
  baseURL: 'https://registry.verra.org/'
})

async function fetchProjects (projectId) {
  try {
    const response = await request.get('uiapi/asset/asset/search?maxResults=2000&$count=true&$skip=0&$top=50', {
      "headers": {
        "accept": "application/json",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,en-AU;q=0.7,th;q=0.6",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      "referrer": "https://registry.verra.org/app/search/VCS/All%20Projects",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "{\"program\":\"VCS\",\"resourceStatuses\":[\"VCS_EX_CRED_TRANS_FRM_OTHER_PROG\",\"VCS_EX_REGISTERED\",\"VCS_EX_REG_VER_APPR_REQUESTED\",\"VCS_EX_REGISTRATION_REQUESTED\",\"VCS_EX_UNDER_DEVELOPMENT\",\"VCS_EX_UNDER_VALIDATION\",\"VCS_EX_WITHDRAWN\"]}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });
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
fetchProjects()