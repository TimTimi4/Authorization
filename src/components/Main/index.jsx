import { useState, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const Main = () => {
  const [data, setData] = useState({})
  const location = useLocation()
  const code = useMemo(() => new URLSearchParams(location.search).get('code'), [location])
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    console.log(success)
    if (!success) return
    fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((userData) => setData(userData))
  }, [success])

  useEffect(() => {
    if (code) {
      fetch('http://localhost:1717/auth', {
        method: 'POST',
        body: JSON.stringify({ code }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setSuccess(true)
          localStorage.setItem('token', userData.access_token)
        })
    }
  }, [code])
  return (
    <div>Main {data.created_at}</div>
  )
}

export default Main
