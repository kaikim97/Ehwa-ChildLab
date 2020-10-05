import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'
import Menubar from './components/Menubar'


class App extends Component {
  state = {
    info: [
      {
          gender: '',
          name: '',
          dateOfBirth: '',
          primaryLanguage: '',  
          education: '',
          history: '',
          majorMuscle: '',
          minorMuscle: '',
          surgery: '',
          medication: '',
          problem: '',
          eatingProblem:'',
          toiletProblem:'',
          sleepProblem: '',
          broSis: '',
          impaired: '',
          impairment: '',
          schoolLanguage: '',
          reason: '',
          improvement: '',
          awareness:  ''

      }
    ]
  }
  newAnswer = (gender, name, dateOfBirth, primaryLanguage, education, history, 
    majorMuscle, minorMuscle, surgery, medication, problem, eatingProblem,
    toiletProblem, sleepProblem, broSis, impaired, impairment,
    schoolLanguage, reason, improvement,awareness) => {
    this.setState({info: [{gender:gender , name: name, dateOfBirth: dateOfBirth, 
      primaryLanguage:primaryLanguage, education:education, history:history, majorMuscle:majorMuscle, 
      minorMuscle:minorMuscle, surgery:surgery, medication:medication, problem:problem,
      eatingProblem:eatingProblem, toiletProblem:toiletProblem, sleepProblem:sleepProblem,
      broSis:broSis, impaired:impaired, impairment:impairment, schoolLanguage:schoolLanguage,
      reason:reason, improvement:improvement, awareness:awareness

    }]})
  }
  
  render() {
    return (
      <div className="App">
        <header style={headerStyle}>아동언어연구소</header>
        <Menubar />
        <Form form={this.state.info} newAnswer={this.newAnswer}/>
      </div>
    )
  }
}

const headerStyle = {
  textAlign: 'left',
  padding: '30px',
  fontSize: '30px'
}
export default App

