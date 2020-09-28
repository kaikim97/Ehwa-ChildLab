import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField  from 'material-ui/TextField'




class Personal extends Component {
    state = {
        radio: {
            male: true,
            female: ''
        }
    }
    render() {
        return (
            <div  className ="container" >
                <p style={{display:"inline"}}>아동성별:</p>
                {' '}
                <input
                    type="radio" 
                    value ="Male" 
                    name = "gender"
                    id = "gender" 
                    onChange = {this.props.onChange}
                    checked = {this.props.personal.gender === "Male"}
                /> 남자
                {' '}
                <input  
                    type="radio" 
                    value ="Female" 
                    name = "gender"
                    id = "gender" 
                    onChange = {this.props.onChange}
                    checked = {this.props.personal.gender === "Female"}
                /> 여자
                <br />

                <MuiThemeProvider>
                    <React.Fragment>
                        <TextField
                            hintText = "Child's Name"
                            floatingLabelText = "아동 이름"
                            onChange = {this.props.onChange}
                            id = 'name'
                            value = {this.props.personal.name}
                        />
                        <br />
                        <TextField
                            hintText = "Child's Date of Birth"
                            floatingLabelText = "아동 생년월일"
                            onChange = {this.props.onChange}
                            id = 'dateOfBirth'
                            value = {this.props.personal.dateOfBirth}
                        />
                         <br />
                        <TextField
                            hintText = "Primary Language"
                            floatingLabelText = "아동이 사용하는 언어"
                            onChange = {this.props.onChange}
                            id = 'primaryLanguage'
                            value = {this.props.personal.primaryLanguage}
                        />
                        <br />
                        <br />
                        
                        <textarea 
                            type="text"
                            style={{margin:'20px', width:"300px", height:'100px', resize:'none', fontSize: '14px'}}
                            placeholder = "아동의 언어 문제 기술"
                            id= 'problem'
                            value = {this.props.personal.problem}
                            onChange = {this.props.onChange}
                        />
                        <br />
                        <br />
                        <button 
                            style = {btnStyle}
                            onClick = {this.props.onContinue}
                        >Continue </button>

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


export default Personal