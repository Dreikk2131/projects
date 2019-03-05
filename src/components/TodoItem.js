import React from "react"

export default function Comment(props) {
    function formatDate(date) {
        return date.toLocaleDateString();
      }
    console.log(props)
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.name.name}
          </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }