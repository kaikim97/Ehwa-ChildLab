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
    show = () => {
        if(this.props.personal.impaired === "Yes"){
            return false;
        }
        else { 
            return true;
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

                         <p style={{display:"inline-block"}}>형제 또는 자매가 있습니까?</p>
                        {' '}
                        <input
                            type="radio" 
                            value ="Yes" 
                            name = "broSis"
                            id = "broSis" 
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.broSis === "Yes"}
                        /> 네

                        <input
                            type="radio" 
                            value ="No" 
                            name = "broSis"
                            id = "broSis" 
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.broSis === "No"}
                        /> 아니오

                        <br/>

                        <p style={{display:"inline-block"}}>장애가 있는 아동입니까?</p>
                        {' '}
                        <input
                            type="radio" 
                            value ="Yes" 
                            name = "impaired"
                            id = "impaired" 
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.impaired === "Yes"}
                        /> 네

                        <input
                            type="radio" 
                            value ="No" 
                            name = "impaired"
                            id = "impaired" 
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.impaired === "No"}
                        /> 아니오

                        <br />

                        <input 
                            type = "text"
                            name = "impairment"
                            id = "impairment"
                            value = {this.props.personal.impairment}
                            onChange = {this.props.onChange}
                            hidden =  {this.show()}
                            placeholder = "진단명"
                            style={{border:"none", borderBottom:"1px solid lightGray", outline:"none"}}
                        />
                        <br/>


                        <TextField
                            hintText = "예: 한국어, 영어 등"
                            floatingLabelText = "아동이 가정에서 사용하는 언어"
                            onChange = {this.props.onChange}
                            id = 'primaryLanguage'
                            value = {this.props.personal.primaryLanguage}
                        />
                        <br />

                        <TextField
                            hintText = "예: 한국어, 영어 등"
                            floatingLabelText = "유치원에서 사용하는 언어"
                            onChange = {this.props.onChange}
                            id = 'schoolLanguage'
                            value = {this.props.personal.schoolLanguage}
                        />
                        <br />

                        <TextField
                            hintText = "예: 이해는 하는데 표현을 못한다"
                            floatingLabelText = "아동의 언어문제 기술"
                            onChange = {this.props.onChange}
                            id = 'problem'
                            value = {this.props.personal.problem}                             
                        />
                        <br />

                        <TextField
                            hintText = "예: 어릴 때 관심을 너무 못줘서"
                            floatingLabelText = "원인이 무엇이라고 생각하십니까?"
                            onChange = {this.props.onChange}
                            id = 'reason'
                            value = {this.props.personal.reason}                             
                        />
                        <br />

                        <br />

                        <p style={{display:"inline-block"}}>아동의 언어문제가</p>
                        <br />
                        <input
                            type="radio" 
                            value ="getting better" 
                            name = "improvement"
                            id = "improvement" 
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.improvement === "getting better"}
                        /> 개선되고 있다

                        <input
                            type="radio" 
                            value ="getting worse" 
                            name = "improvement"
                            id = "improvement" 
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.improvement === "getting worse"}
                        /> 악화되고 있다
-
 

                        <input
                            type="radio" 
                            value ="no change" 
                            name = "improvement"
                            id = "improvement" 
                            onChange = {this.props.onChange}
                            checked = {this.props.personal.improvement === "no change"}
                        /> 변화가 없다

                        <br/>

                        <TextField
                            hintText = "예: 인지하는거 같다, 원하는 대로 안되면 친구를 때린다"
                            floatingLabelText = "아동의 자신의 언어문제를 인지하는지"
                            onChange = {this.props.onChange}
                            id = 'awareness'
                            value = {this.props.personal.awareness}    
                            style ={{width:"50%"}}                  
                        />
                        <br />

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


export default Personal