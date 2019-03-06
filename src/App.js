import React from "react"

import Navbar from "./components/Navbar"
import Comment from "./components/Comment"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import {info} from "./components/Object"


console.log(info);
function App (){

  return (
    <div>
      <Navbar />
      <div className="todo-list">
      <Comment
        date={info}
      />
      <Comment
        date={info}
      />
      <Comment
        date={info}
      />
      </div>
      <MainContent />
      <Footer />
    </div>
  ) 
}

export default App;
