import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import UserDetails from './components/users/UserDetails'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css'

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div>
            <NavBar title='Github Finder' icon='fab fa-github' />
              <div className="container">
                <Alert />  
                <Switch>
                  <Route exact path='/' render={props => (
                    <Fragment>
                      <Search  />
                      <Users />
                    </Fragment>
                  )} />
                  <Route exact path='/about' component={About} />
                  <Route path='/users/:login' component={UserDetails} />
                </Switch>
              </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

App.propTypes = {
  userData: PropTypes.array || PropTypes.string,
  isLoading: PropTypes.func,
}

export default App