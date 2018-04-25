import * as api from '../services/game.api'
import { SET_GAME, SET_GAMES } from '../reducers/game.reducer'
import { history } from '../../index'

export function list () {
  return async dispatch => {
    const resp = await api.list()
    dispatch({
      type: SET_GAMES,
      payload: resp
    })
  }
}

export function one (id) {
  return async dispatch => {
    const resp = await api.one(id)
    dispatch({
      type: SET_GAME,
      payload: resp
    })
  }
}
