import { useEffect } from "react"

export default () => {
  useEffect(() => {
    fetch("/api/test").then(res => res.json()).then(console.log);
  }, [])
  return <></>
}