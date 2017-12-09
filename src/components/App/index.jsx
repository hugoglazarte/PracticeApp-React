// importamos react
import React, { Component } from 'react';
// normalize-css para mejorar compatibilidad
import 'normalize-css';

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

// creamos el component App
// cuando creamos varios elementos HTML deben
// estar encapsulados en un div.
class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App
