// ActionTypes
export const SET_GAME = '[GROUP] Set Game'
export const SET_GAMES = '[GROUP] Set Games'

const initialState = {
  one: null,
  list: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_GAME:
      return { ...state,
        one: action.payload }
    case SET_GAMES:
      return { ...state,
        list: action.payload }
    default:
      return state
  }
}
