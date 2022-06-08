import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../components/Header/Header'

const Profile = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    const isAuthorized = localStorage.getItem('isAuth')
      ? JSON.parse(localStorage.getItem('isAuth'))
      : null

    if (!isAuthorized) {
      navigate('/login')
    }
  }, [])

  return (
    <div>
      <Header />
      <h1>Страница профиля</h1>
    </div>
  )
}

export default Profile
