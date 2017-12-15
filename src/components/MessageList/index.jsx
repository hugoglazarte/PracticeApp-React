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

    // le indicamos el alcance a las funciones q s renderisan abajo y se llaman como event

  }


// para recorrer los valores del array message vamos a usar map en lugar de un ciclo for
// return (
//   <span>{ msg.text }</span>
// )
//
// ** onRetweet={ () => this.onRetweet(msg.id) } **
// con una arrow function anonima podemos lanzar la funcion
//   onRetweet pasandole el id, sino no vamos a poder
//      sin la arrow solo llamamos a la funcion pero no la ejecutamos
  render(){
    return(
      <div className={ styles.root }>
        { this.props.messages.map( msg => {
          return (
            <Message
              key={ msg.id }
              text={ msg.text }
              picture={ msg.picture }
              displayName={ msg.displayName }
              username={ msg.username }
              date={ msg.date }
              numRetweets={ msg.retweets }
              numFavorites={ msg.favorites }
              onRetweet={ () => this.props.onRetweet(msg.id) }
              onFavorite={ () => this.props.onFavorite(msg.id) }
              onReplyTweet={ () => this.props.onReplyTweet(msg.id, msg.username) }
            />
          )
        } ).reverse() }
      </div>
    )
  }
}

export default MessageList
