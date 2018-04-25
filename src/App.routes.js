import Error404 from './pages/Error404.page'
import GameStart from './pages/GameStart.page'
import GameSingle from './pages/GameSingle.page'
import Forbidden from './pages/Forbidden.page'

export const appRoutes = [
  {
    path: '/game/start',
    component: GameStart
  }, {
    path: '/game/:id/play',
    component: GameSingle
  }, {
    path: '/game/forbidden',
    component: Forbidden
  }, {
    component: Error404
  }
]
