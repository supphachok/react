export function delay(delayInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, delayInMs)
  })
}
