import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'


class App extends Component {
  state = {
    info: [
      {
          gender: '',
          name: '',
          dateOfBirth: '',
          education: '',
          history: '',
          majorMuscle: '',
          minorMuscle: '',
          surgery: '',
          medication: ''
      }
    ]
  }
  newAnswer = (gender, name, dateOfBirth, education, history, 
    majorMuscle, minorMuscle, surgery, medication) => {
    this.setState({info: [{gender:gender , name: name, dateOfBirth: dateOfBirth, 
      education:education, history:history, majorMuscle:majorMuscle, 
      minorMuscle:minorMuscle, surgery:surgery, medication:medication
    }]})
  }
  
  render() {
    return (
      <div className="App">
        <Form form={this.state.info} newAnswer={this.newAnswer}/>
      </div>
    )
  }
}

export default App

