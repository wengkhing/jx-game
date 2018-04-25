import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'

import { one } from '../store/actions/game.action'

import './GameSingle.css'

class GameSingle extends Component {
  componentDidMount () {
    const gameId = this.props.match.params.id
    this.props.getGame(gameId)
  }

  redirect () {
    if (this.props.game && this.props.game.status === 'FORBIDDEN') {
      return <Redirect to='/game/forbidden' />
    }
  }

  renderGame () {
    if (this.props.game) {
      const { gameIconUrl, gameNameInChinese, gameDescription, guideUrl, status } = this.props.game
      return (
        <div>
          <img src={gameIconUrl} alt={gameNameInChinese}/>
          <br />
          <h1>{gameNameInChinese}</h1>
          <h2>{gameDescription}</h2>
          <p>{status}</p>
          <a href={guideUrl}>{guideUrl}</a><br />
          {this.redirect()}
        </div>
      )
    }
  }

  render () {
    return (
      <div className='game-info'>
        {this.renderGame()}
      </div>
    );
  }
}

function mapStateToProps ({ game }) {
  return {
    game: game.one
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getGame: one }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSingle)
