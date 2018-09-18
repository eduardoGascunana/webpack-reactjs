import React from 'react'
import styles from './app.css'
import image from '../assets/world.jpg'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.text}>Hola Mundo</div>
        <img src={image} className={styles.image} alt='mundo' />
      </div>
    )
  }
}

export default App
