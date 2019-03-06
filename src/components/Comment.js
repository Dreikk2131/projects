import React from "react"
import "./Comment.css"


export default class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    const {isOpen} = this.state
    return (
      <div className="Comment">
        <button onClick = {this.toggleOpen}>{isOpen?"Close":"Open"}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if (!this.state.isOpen) return null
    return (
      <div className="UserInfo">
          <div className="UserInfo-name">
            {this.props.date.name}
          </div>
          <div className="Comment-text">{this.props.date.text} {this.props.date.surname}</div>
        </div>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}