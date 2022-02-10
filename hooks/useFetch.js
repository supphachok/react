import { useState, useEffect } from "react"

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(async () => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const res = await fetch(url, options)
        const json = await res.json()

        setResponse(json)
        setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { response, error, isLoading }
}

export default useFetch
