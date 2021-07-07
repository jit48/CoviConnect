import React from 'react'
import "./Center.scss"
function Center(props) {
    return (
        <div className="center">
           {props.children} 
        </div>
    )
}

export default Center
