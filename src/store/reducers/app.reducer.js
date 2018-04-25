// ActionTypes
export const START_INT_LOADING = '[APP] Start Interruptive Loading'
export const END_INT_LOADING = '[APP] End Interruptive Loading'
export const UPDATE_ERROR = '[APP] Update Error'
export const DO_NOTHING = '[APP] Do Nothing'

const initialState = {
  loadStack: [],
  error: null
}

export default function (state = initialState, action) {
  const { payload, type } = action
  let updatedStack
  switch (type) {
    case START_INT_LOADING:
      return { ...state,
        loadStack: [...state.loadStack, payload] }
    case END_INT_LOADING:
      updatedStack = state.loadStack.filter(item => item !== payload)
      return { ...state,
        loadStack: updatedStack }
    case UPDATE_ERROR:
      return { ...state,
        error: payload }
    default:
      return state
  }
}
