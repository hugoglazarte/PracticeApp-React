// importamos react
import React, { Component } from 'react';
// importamos el comp MessageList
import MessageList from '../MessageList';


class Main extends Component {
  constructor(){
    super()
    this.state = {
      messages: [{
        text: 'Mensaje de prueba',
        picture: 'https://lh3.googleusercontent.com/-GQ4rWC32tIo/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof3L-nRM0FkfofJ4W_B0YCGfLqvBMg/s32-c-mo/photo.jpg',
        displayName: 'Hugo H. Lazarte',
        username: 'hugoglazarte',
        date: Date.now()
      },
      {
        text: 'Mensaje de prueba',
        picture: 'https://lh3.googleusercontent.com/-GQ4rWC32tIo/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof3L-nRM0FkfofJ4W_B0YCGfLqvBMg/s32-c-mo/photo.jpg',
        displayName: 'Hugo H. Lazarte',
        username: 'hugoglazarte',
        date: Date.now() - 1800000
      }]
    }
  }

  render(){
    // los mensajes los vamos a mostrar y manejar por el nuevo comp. MessageList
    return (
      <MessageList messages={ this.state.messages } />
    )
  }
}

export default Main
