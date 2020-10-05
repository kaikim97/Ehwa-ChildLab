import React, { Component } from 'react'

class Personal1 extends Component {
    state = {
        radio: {
            male: true,
            female: ''
        }
    }

    render() {
        return (
            <div className="container">
                <div>
                    아동의 이름
                </div>
            </div>
        )
    }
}

export default Personal1
