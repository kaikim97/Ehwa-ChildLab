import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Personal from  './questions/Personal'
import Education from  './questions/Education'
import Development from './questions/Development'
import Illness from './questions/Illness'
import Sidebar from './Sidebar'





class Form extends Component {
    state = {
        step: 0,
        gender : '',
        name : '',
        dateOfBirth : '',
        primaryLanguage : '',
        education : '', 
        history: '',
        majorMuscle: '',
        minorMuscle: '',
        surgery: '',
        medication: '',
        problem: '',
        eatingProblem: '',
        broSis:'', 
        impaired: '',
        impairment: ''
    }

    onStart = (e) => {
        e.preventDefault()
        this.nextStep()
    }



    onChange = (e) => this.setState({[e.target.id]: e.target.value})

    onContinue = (e) => {
        e.preventDefault();
        this.props.newAnswer(this.state.gender, this.state.name, 
            this.state.dateOfBirth, this.state.primaryLanguage, this.state.education, 
            this.state.history,this.state.majorMuscle, this.state.minorMuscle,
            this.state.surgery, this.state.medication, this.state.problem, this.state.eatingProblem,
            this.state.toiletProblem, this.state.sleepProblem,
            this.state.broSis, this.state.impaired, this.state.impairment,
            this.state.schoolLanguage, this.state.reason, this.state.improvement,
            this.state.awareness)
        this.nextStep()
    }
    onBack = (e) => {
        e.preventDefault();
        this.props.newAnswer(this.state.gender, this.state.name, 
            this.state.dateOfBirth, this.state.primaryLanguage, this.state.education, this.state.history,
            this.state.majorMuscle, this.state.minorMuscle,
            this.state.surgery, this.state.medication, this.state.problem, this.state.eatingProblem,
            this.state.toiletProblem, this.state.sleepProblem,
            this.state.broSis, this.state.impaired, this.state.impairment,
            this.state.schoolLanguage, this.state.reason, this.state.improvement,
            this.state.awareness)
        this.prevStep()
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
      }
    
      prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
      }
    

    render() {
        const { step } = this.state
        switch(step) {
            case 0:
                return(
                    <div className="container" style={myStyle}>
                        <div style={{flex:'6', padding:'40px'}}>
                            <button onClick={this.onStart} style={startButton}>Start</button>
                        </div>
                        <div style={{flex:'6'}}></div>
                    </div>
                   
                )
                
            case 1:
                return(
                    <div className="container" style={myStyle}>
                        <div  style={{flex:'2'}}>
                            <Sidebar step={this.state.step}/>
                        </div>
                        <div style={{flex:8}}>
                            <Personal 
                                personal={this.state} 
                                onChange={this.onChange} 
                                onContinue={this.onContinue}
                            />
                        </div>
                    </div>
                    
                )
            case 2: 
                return(
                    <div className="container" style={myStyle}>
                        <div style={{flex:'2'}}>
                            <Sidebar step={this.state.step}/>
                        </div>
                        <div style={{flex:8}}>
                            <Education 
                                personal={this.state} 
                                onChange={this.onChange} 
                                onContinue={this.onContinue}
                                onBack={this.onBack}
                            />
                        </div>
                        
                    </div>
                    
                    
                )
            case 3: 
                return(
                    <div className="container" style={myStyle}>
                        <div style={{flex:2}}>
                            <Sidebar step={this.state.step}/>
                        </div>
                        <div style={{flex:8}}>
                            <Development 
                                personal={this.state} 
                                onChange={this.onChange} 
                                onContinue={this.onContinue}
                                onBack={this.onBack}
                                
                            />
                        </div>
                        
                    </div>
                )
            case 4:
                return(
                    <div className="container" style={myStyle}>
                        <div style={{flex:2}}>
                            <Sidebar step={this.state.step}/>
                        </div>
                        <div style={{flex:8}}>
                            <Illness 
                                personal={this.state} 
                                onChange={this.onChange} 
                                onContinue={this.onContinue}
                                onBack={this.onBack}
                            />
                        </div>  
                    </div>
                )
            case 5:
                return(
                    <div className="container" style={myStyle}>
                        <div style={{flex:2}}>
                            <Sidebar step={this.state.step}/>
                        </div>
                        <div style={{flex:'8', padding:'40px'}}>
                            <p style={{margin:'50px'}}>제출하시겠습니까?</p>
                            <button onClick={this.onStart} style={startButton}>Submit</button>
                        </div>
                    </div>
                   
                )
            default: 
                return(
                    <div>
                        <p style={{padding:'50px'}}>제출되었습니다. 평가 결과를 기다려주세요.</p>
                    </div>
                    
                )
        }

    }
}

const myStyle = {
    margin:'70px',
    display:"flex",
}

const startButton = {
    color: "white",
    backgroundColor: "#6C2DC7",
    border: "none",
    fontSize: "16px",
    padding: "15px 30px"
}
Form.propTypes = {
    form: PropTypes.array.isRequired
}
export default Form

