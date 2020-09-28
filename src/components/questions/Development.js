import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField  from 'material-ui/TextField'

class Development extends Component {
    render() {
        return (
            <div className="container">
                <MuiThemeProvider>
                    <React.Fragment>
                        <TextField
                            hintText = "Major Muscle Development"
                            floatingLabelText = "대근육 발달 이정표"
                            onChange = {this.props.onChange}
                            id = 'majorMuscle'
                            value = {this.props.personal.majorMuscle}
                        />
                        <br />
                        <TextField
                            hintText = "Minor Muscle Development"
                            floatingLabelText = "소근육 발달 이정표"
                            onChange = {this.props.onChange}
                            id = 'minorMuscle'
                            value = {this.props.personal.minorMuscle}
                        />
                        <br/>
                        <br/>
                        <p style={{display:"inline-block"}}>식이 문제 유무:</p>
                        {' '}
                        <input
                            type="radio" 
                            value ="Yes" 
                            name = "eatingProblem"
                            id = "eatingProblem" 
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.eatingProblem === "Yes"}
                        /> 네
                        {' '}
                        <input  
                            type="radio" 
                            value ="No" 
                            name = "eatingProblem"
                            id = "eatingProblem"
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.eatingProblem === "No"}
                        /> 아니오
                        <br />

                        <p style={{display:"inline-block"}}>배변 문제 유무:</p>
                        {' '}
                        <input
                            type="radio" 
                            value ="Yes" 
                            name = "toiletProblem"
                            id = "toiletProblem"
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.toiletProblem === "Yes"}
                        /> 네
                        {' '}
                        <input  
                            type="radio" 
                            value ="No" 
                            name = "toiletProblem"
                            id = "toiletProblem"
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.toiletProblem === "No"}
                        /> 아니오
                        <br />

                        <p style={{display:"inline-block"}}>수면 문제 유무:</p>
                        {' '}
                        <input
                            type="radio" 
                            value ="Yes" 
                            name = "sleepProblem"
                            id = "sleepProblem" 
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.sleepProblem === "Yes"}
                        /> 네
                        {' '}
                        <input  
                            type="radio" 
                            value ="No" 
                            name = "sleepProblem"
                            id = "sleepProblem"
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.sleepProblem === "No"}
                        /> 아니오
                        <br />



                        <br />
                        <br />
                        <button 
                            style = {btnStyle}
                            onClick = {this.props.onBack}> 
                            Back 
                        </button>
                        <button
                            style = {btnStyle}
                            onClick = {this.props.onContinue}
                        >Continue</button>

                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

const btnStyle = {
    margin:'20px',
    color: "#6C2DC7",
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "#6C2DC7",
    fontSize: "13px",
    padding: "8px 13px"
}

export default Development
