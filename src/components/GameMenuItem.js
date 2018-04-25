import React from 'react'
import { Link } from 'react-router-dom'
import './GameMenuItem.css'

const GameMenuItem = (props) => {
  const {
    gameUniqueId, gameNameInChinese
  } = props.data

  return (
    <Link className='component-game-menu-item'
      to={`/game/${gameUniqueId}/play`}>
      <div>{gameNameInChinese}</div>
    </Link>
  )
}

export default GameMenuItem
