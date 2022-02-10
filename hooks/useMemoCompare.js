import { useEffect, useRef } from "react"

const useMemoCompare = (next, compare) => {
  const previousRef = useRef()
  const previous = previousRef.current

  const isEqual = compare(previous, next)

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isEqual ? previous : next
}

export default useMemoCompare

/*

How to use 

const objFinal = useMemoCompare(obj, (prev, next) => {
  return prev && prev.id === next.id
})

useEffect(() => {
  // do something
}, [objFinal])

*/
