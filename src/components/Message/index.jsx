// importamos react
import React, { Component } from 'react';
// para mejora compatibilidad : npm install normalize-css --save
// importamos la libre moment : npm install moment --save
import moment from 'moment';
import styles from './message.css';

class Message extends Component {
  constructor(props){
    super(props)

    this.state = {
      pressFavorite: false,
      pressRetweet: false
    }

    this.onPressRetweet = this.onPressRetweet.bind(this)
    this.onPressFavorite = this.onPressFavorite.bind(this)
  }

  /** como queremos ejecutar onRetweet que se encuentra en el padre y queremos
      modificar un estado de este componente, creamos una nueva funcion que haga
      las dos cosas
  **/

  onPressRetweet() {
    this.props.onRetweet()
    this.setState({
      pressRetweet: true
    })
  }

  onPressFavorite() {
    this.props.onFavorite()
    this.setState({
      pressFavorite: true
    })
  }

  render(){

    // creamos la funcion con la libreria momment que nos devuelte "fue creado hace 10min"
    let dateFormat = moment(this.props.date).fromNow();



    // className={ (this.state.pressRetweet) ? styles.rtGreen : '' }
    //    si el estado de pressRetweet es true le aplico el estilo rtGreen y sino no hago nada
    return(
      <div className={ styles.root }>
        <div className={ styles.user }>
          <figure>
            <img className={ styles.avatar } src={ this.props.picture } />
          </figure>
          <span className={ styles.displayName }> { this.props.displayName }</span>
          <span className={ styles.username }> { this.props.username }</span>
          <span className={ styles.date }> { dateFormat }</span>
        </div>

        <h3> { this.props.text } </h3>

        <div className={ styles.buttons }>
          <div
          className={ styles.icon }
          onClick={ this.props.onReplyTweet }
          >

          <span className='fa fa-reply'></span>
          </div>

          <div
          className={ (this.state.pressRetweet) ? styles.rtGreen : '' }
          onClick={ this.onPressRetweet }
          >
            <span className='fa fa-retweet'></span>
            <span className={styles.num}>{ this.props.numRetweets }</span>
          </div>
          <div
          className={ (this.state.pressFavorite) ? styles.favYellow : ''  }
          onClick={ this.onPressFavorite }
          >
            <span className='fa fa-star'></span>
            <span className={styles.num}>{ this.props.numFavorites }</span>
          </div>

        </div>
      </div>
    )
  }
}

export default Message
