import React from "react"

import Navbar from "./components/Navbar"
import Comment from "./components/TodoItem"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"


function App (){
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  const i = {
    name: "Tom",
    surname: "Merilin"
  }
  return (
    <div>
      <Navbar />
      <div className="todo-list">
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
        name={i}
      />
      </div>
      <MainContent />
      <Footer />
    </div>
  ) 
}

export default App;
