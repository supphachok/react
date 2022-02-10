import { delay } from "./index"

export function getAccessToken() {
  return new Promise(async (resolve) => {
    const accessToken = sessionStorage.getItem("accessToken") || null
    if (!accessToken) {
      sessionStorage.setItem("accessToken", "fakeToken") // function set new storage
      for (let i = 0; i < 30; i++) {
        await delay(100)
        const token = sessionStorage.getItem("accessToken")
        if (token !== null) {
          console.log("access token resolve", i)
          resolve(token)
          break
        }
      }
    } else {
      resolve(accessToken)
    }
  })
}

export function getRefreshToken() {
  return new Promise(async (resolve) => {
    const refreshToken = sessionStorage.getItem("refreshToken") || null
    if (!refreshToken) {
      sessionStorage.setItem("refreshToken", "fakeToken") // function set new storage
      for (let i = 0; i < 30; i++) {
        await delay(100)
        const token = sessionStorage.getItem("refreshToken")
        if (token !== null) {
          console.log("refreshToken token resolve", i)
          resolve(token)
          break
        }
      }
    } else {
      resolve(refreshToken)
    }
  })
}
