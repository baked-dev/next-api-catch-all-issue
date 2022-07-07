import { useEffect } from "react"

export default () => {
  useEffect(() => {
    fetch("/api/login").then(res => res.json()).then(console.log);
  }, [])
  return <></>
}