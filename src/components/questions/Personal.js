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
                <input
                    type="radio" 
                    value ="Male" 
                    name = "gender"
                    id = "gender" 
                    onChange = {this.props.onChange}
                    checked = {this.props.personal.gender === "Male"}
                /> Male
                <input  
                    type="radio" 
                    value ="Female" 
                    name = "gender"
                    id = "gender" 
                    onChange = {this.props.onChange}
                    checked = {this.props.personal.gender === "Female"}
                /> Female
                <br />

                <MuiThemeProvider>
                    <React.Fragment>
                        <TextField
                            hintText = "Enter Your Child's Name"
                            floatingLabelText = "Name"
                            onChange = {this.props.onChange}
                            id = 'name'
                            value = {this.props.personal.name}
                        />
                        <br />
                        <TextField
                            hintText = "Child's Date of Birth"
                            floatingLabelText = "Date of Birth"
                            onChange = {this.props.onChange}
                            id = 'dateOfBirth'
                            value = {this.props.personal.dateOfBirth}
                        />

                        <br />
                        <br />
                        <button 
                            style = {{margin:15}}
                            onClick = {this.props.onContinue}
                        >Continue </button>

                    </React.Fragment>
                </MuiThemeProvider>


            </div>
            
       )
    }
}


export default Personal