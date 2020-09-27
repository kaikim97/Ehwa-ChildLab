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
        education : '', 
        history: '',
        majorMuscle: '',
        minorMuscle: '',
        surgery: '',
        medication: ''
    }

    onStart = (e) => {
        e.preventDefault()
        this.nextStep()
    }

    onChange = (e) => this.setState({[e.target.id]: e.target.value})

    onContinue = (e) => {
        e.preventDefault();
        this.props.newAnswer(this.state.gender, this.state.name, 
            this.state.dateOfBirth, this.state.education, this.state.history,
            this.state.majorMuscle, this.state.minorMuscle,
            this.state.surgery, this.state.medication)
        this.nextStep()
    }
    onBack = (e) => {
        e.preventDefault();
        this.props.newAnswer(this.state.gender, this.state.name, 
            this.state.dateOfBirth, this.state.education, this.state.history,
            this.state.majorMuscle, this.state.minorMuscle,
            this.state.surgery, this.state.medication)
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
                    <button onClick={this.onStart} style={{margin:'150px'}}>Start</button>
                )
                
            case 1:
                return(
                    <div className="container" style={{margin:'70px', display:"flex"}}>
                        <div  style={{flex:'2'}}>
                            <Sidebar />
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
                    <div className="container" style={{margin:'70px', display:"flex"}}>
                        <div style={{flex:'2'}}>
                            <Sidebar />
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
                    <div className="container" style={{margin:'70px'}}>
                        <Development 
                            personal={this.state} 
                            onChange={this.onChange} 
                            onContinue={this.onContinue}
                            onBack={this.onBack}
                        />
                    </div>
                )
            case 4:
                return(
                    <div className="container" style={{margin:'70px'}}>
                        <Illness 
                            personal={this.state} 
                            onChange={this.onChange} 
                            onContinue={this.onContinue}
                            onBack={this.onBack}
                        />
                    </div>
                )
            default: 
                    return
        }

    }
}


Form.propTypes = {
    form: PropTypes.array.isRequired
}
export default Form

