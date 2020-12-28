import React, { Component  } from "react";
class Input extends Component{

    render(){
        return(
            <div>
                <input placeholder = "이름"/>
                <input placeholder = "전화번호"/>
                <button>저장</button>
            </div>
        )
    }
}

export default Input