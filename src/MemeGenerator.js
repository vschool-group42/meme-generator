import React, { Component } from "react"



function MemeGenerator(props) {
    return (
        <form >
            <input

                value={this.state.topInput}
                onChange={props.onChange}
            />

            <button type="submit"></button>
        </form>
    )
}





export default MemeGenerator