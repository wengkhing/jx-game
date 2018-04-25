import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GameMenuItem from './GameMenuItem'

import { list } from '../store/actions/game.action'

import './GameMenu.css'

class GameMenu extends Component {
  componentDidMount () {
    this.props.listGame()
  }

  renderGameList () {
    if (this.props.games && this.props.games.length > 0) {
      return this.props.games.map(game => (
        <GameMenuItem key={game.gameUniqueId} data={game} />
      ))
    }
    return <p>Can't load game list</p>
  }

  render () {
    return  (
      <div>
        { this.renderGameList() }
      </div>
    )
  }
}

function mapStateToProps ({ game }) {
  return {
    games: game.list
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ listGame: list }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameMenu)
