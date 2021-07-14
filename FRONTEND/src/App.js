import React, { Component } from 'react'
import NavBar from './components/layout/NavBar'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar title='Github Finder' icon='fab fa-github' />
      </div>
    )
  }
}
