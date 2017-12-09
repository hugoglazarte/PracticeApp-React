// importamos react
import React, { Component } from 'react';

// importamos el nuevo componente q renderiza el bloque de mensajes
import Message from '../Message';

import styles from './message-list.css';

// creamos el componente Messagelist (aclaracion, es hijo o se usa por Main)
class MessageList extends Component {
  // Las props llegan desde el comp padre, en este caso Main
  constructor(props){
    super(props)
  }


// para recorrer los valores del array message vamos a usar map en lugar de un ciclo for
// return (
//   <span>{ msg.text }</span>
// )
  render(){
    return(
      <div className={ styles.root }>
        { this.props.messages.map( msg => {
          return (
            <Message
              text={ msg.text }
              picture={ msg.picture }
              displayName={ msg.displayName }
              username={ msg.username }
              date={ msg.date }
            />
          )
        } ) }
      </div>
    )
  }
}

export default MessageList
