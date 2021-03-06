import React, { Component } from 'react'
import './App.css'
import { Header } from 'Components/Header'
import Profiles from 'Components/Profiles'
import { Footer } from 'Components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('./dinosaurs.json')
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response })
      })
      .catch(error => {})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Profiles dinosaurs={this.state.data} />
        <Footer />
      </div>
    )
  }
}

export default App
