import React, { Component  } from "react";

class Output extends Component{
    render(){
        const list = this.props.data;
        return(
            <div>
                {list.map(row => {
                    return row
                })}
            </div>
        )
    }
}

export default Output