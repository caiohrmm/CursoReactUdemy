import React from 'react'
import './TestandoCSS.css'

/* Como se fosse um objeto com as classes CSS */
import styles from './TestandoCSS.module.css'


const TestandoCSS = () => {
  return (
    <div>
      <ul className={styles['my_list']}>
        <li>Caio</li>
        <li>Henrique</li>
      </ul>
    </div>
  )
}

export default TestandoCSS