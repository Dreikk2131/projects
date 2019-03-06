import React from "react"
import {books} from "./Object"


class MainContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isButton: true
        }
    }

    render() {
        
    return(
        <main>
            <p>This is where most of my content will go...</p>
            <button onClick = {this.toggleState}>Book</button>
            <ul>
                {this.watchBook()}
            </ul>
        </main>
    )
    }

    toggleState = () =>{
        this.setState(
            {isButton:!this.state.isButton}
        )
    }

    watchBook(){
        const book = books.map((item)=>
                <li key = {item.id}>
                    Name of book: {item.name}<br />
                    Author: {item.author}
                </li>
            )
        if(this.state.isButton){ 
        return book
        }
    }
}

export default MainContent