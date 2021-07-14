import React, { Fragment, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import axios from 'axios'
import PropTypes from 'prop-types'

import NavBar from './components/layout/NavBar'
import Users from './components/layout/Users'
import Search from './components/layout/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import UserDetails from './components/layout/UserDetails'

import './App.css'

const App = () => {
  const [userData, setUserData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState(null);
  const [alertData, setAlertData] = useState({
    msg: '',
    color: ''
  })
  const [isSearchedUser, setIsSearchedUser] = useState({})

  // pass searchUser method down to search so that we can access the search
  const searchUsers = async(user) => {
    setIsLoading(true)
    const results = await axios.get(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`)
    setUserData(results.data.items)
    setIsLoading(false)
  }

  const getUser = async(userName) => {
    setIsLoading(true)
    const results = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`)
    setIsSearchedUser(results.data)
    setIsLoading(false)
  }

  const clearUsers = () => {
    setUserData('')
  }

  const getAlertData = (msg, color) => {
    setAlertData({msg, color})
    setAlert(true);
    setTimeout(() => {
      setAlert(null)
      setAlertData({msg: '', color: ''})
    }, 2000)
  }

  return (
    <BrowserRouter>
      <div>
        <NavBar title='Github Finder' icon='fab fa-github' />
          <div className="container">
            <Alert alert={alert} alertData={alertData}/>  
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search getUser={getUser} setAlert={getAlertData} users={userData} clearUsers={clearUsers} searchUsers={searchUsers} />
                  <Users loading={isLoading} users={userData} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route path='/users/:login' render={props => (
                // if you ... props, you need to accept match not props (or whatever you want from props)
                <UserDetails {...props} getUser={getUser} user={isSearchedUser} loading={isLoading} />
              )} />
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  )
}

App.propTypes = {
  userData: PropTypes.array || PropTypes.string,
  isLoading: PropTypes.func,
}

export default App