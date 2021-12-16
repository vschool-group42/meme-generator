import React, { Component } from "react"



function MemeGenerator(props) {
    return (
        <form >
            <input
                id="topInput"
                onChange={props.onChange}
            />

            <input
                id="bottomInput"
                onChange={props.onChange}
            />

        </form>
    )
}





export default MemeGenerator