import React, { Component } from 'react'

class Menubar extends Component {
    render() {
        return (
            <div style={{display:"flex", padding:'30px'}}>
                <p style={{padding:'10px', borderBottom:"2px solid #6C2DC7", color:"#6C2DC7"}}>언어발달 평가</p>
                <p style={menuStyle}>평가 결과</p>
                <p style={menuStyle}>교육</p>
                <p style={menuStyle}>연구 참여 신청</p>
                <p style={menuStyle}>아동언어연구소</p>
            </div>
        )
    }
}

const menuStyle = {
    padding:'10px 20px'
}

export default Menubar
