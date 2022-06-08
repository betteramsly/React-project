import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Login.module.scss'

const userData = {
  username: 'Admin',
  password: 12345,
}

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)

  const navigate = useNavigate()

  function handleSubmit() {
    if (userData.username === userName && userData.password === +password) {
      navigate('/profile')
      localStorage.setItem('isAuth', true)
    } else {
      setIsError(true)
    }
  }

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <input
          name="username"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value)
          }}
          placeholder="Введите имя"
        />
        <input
          value={password}
          name="password"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          placeholder="Введите пароль"
        />
        <button type="submit">Войти</button>
        {isError ? (
          <p className={styles.errorMessage}>
            Имя пользователя или пароль введены не верно
          </p>
        ) : (
          ''
        )}
      </form>
    </div>
  )
}
// Имя пользователя или пароль введены не верно

export default Login
