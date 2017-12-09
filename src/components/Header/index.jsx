// importamos react
import React, { Component } from 'react';
// importamo el css del modulo correspondiente y con style.root
// podemos manejar esos estilos como variables en className
import styles from './header.css'

class Header extends Component {
  render(){
    return(
      <header className={styles.root}>
        <h1 className={styles.logo}>Reacttr</h1>
      </header>
    )
  }

}

export default Header
