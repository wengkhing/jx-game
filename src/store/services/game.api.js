import customAxios from './app.interceptor'
import { API_BASEURL } from '../../configs/app.config'

export function list () {
  return customAxios({
    method: 'get',
    url: `${API_BASEURL}/gameInfos`,
    loadKey: 'Fetching game list'
  })
}

export function one (id) {
  return customAxios({
    method: 'get',
    url: `${API_BASEURL}/gameInfos/${id}`,
    loadKey: 'Fetching game info'
  })
}