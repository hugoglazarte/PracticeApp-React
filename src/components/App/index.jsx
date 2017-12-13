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

  constructor(){
    super()
      this.state = {
        user: {
          photoURL: 'https://lh3.googleusercontent.com/-GQ4rWC32tIo/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof3L-nRM0FkfofJ4W_B0YCGfLqvBMg/s32-c-mo/photo.jpg',
          email: 'hugoglazarte@gmail.com',
          displayName: 'Hugo G. Lazarte'
          // onOpenText: false
        }
      }
  }


  render(){
    // **** <Main user={ this.state.user }/> *** le pasamos las propiedades de state a main
    return (
      <div>
        <Header />
        <Main user={ this.state.user }/>
      </div>
    )
  }
}

export default App
