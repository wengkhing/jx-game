import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { StyleRoot } from 'radium'

import { renderRoutes } from './helpers/render-routes'
import { appRoutes } from './App.routes'
import GameMenu from './components/GameMenu'
import InterruptiveLoadWrapper from './components/InterruptiveLoadWrapper'

import './App.css'

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className='scope-app'>
          <InterruptiveLoadWrapper />
          <Helmet title='JX Game' />
          <div className="sidebar-container">
            <div className="sidebar">
              <GameMenu />
            </div>
          </div>
          <main>
            <div class="header">header</div>
            <div className="content">
              <Switch>
                <Route path='/' exact
                  render={() => (
                    <Redirect to='/game/start' />
                )} />
                {renderRoutes(appRoutes)}
              </Switch>
            </div>
            <div class="footer">Footer</div>
          </main>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
