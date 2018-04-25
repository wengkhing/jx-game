import axios from 'axios'
import { store } from '../../index'
import {
  START_INT_LOADING,
  END_INT_LOADING,
  UPDATE_ERROR
} from '../reducers/app.reducer'

export default async function customAxios ({ loadKey, ...payload }) {
  const request = { ...payload }

  try {
    startLoading(loadKey)
    const result = await axios(request)
    return Promise.resolve(result.data)
  } catch (err) {
    updateError(err)
    return Promise.reject(err.response)
  } finally {
    endLoading(loadKey)
  }
}

function startLoading (key) {
  store.dispatch({
    type: START_INT_LOADING,
    payload: key
  })
}

function endLoading (key) {
  store.dispatch({
    type: END_INT_LOADING,
    payload: key
  })
}

function updateError (err) {
  store.dispatch({
    type: UPDATE_ERROR,
    payload: err
  })
}
