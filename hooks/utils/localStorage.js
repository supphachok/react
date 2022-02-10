import { delay } from "./index"

export function getLocalStorage(name = "data") {
  return new Promise(async (resolve) => {
    const accessToken = localStorage.getItem(name) || null
    if (!accessToken) {
      localStorage.setItem(name, "fakeData") // function set new storage
      for (let i = 0; i < 30; i++) {
        await delay(100)
        const token = localStorage.getItem(name)
        if (token !== null) {
          console.log("data resolve", i)
          resolve(token)
          break
        }
      }
    } else {
      resolve(accessToken)
    }
  })
}
