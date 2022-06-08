import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
