import {HHeader} from "./components/HHeader"
import {Footer} from "./components/Footer"
import { Form } from "./components/Form"
import { useState } from "react"
import { SeeGifss } from "./components/SeeGifss";

function AppGit(){
  const [category, setCategory]= useState(0);
  return(
    <div className="App">
      <HHeader/>
      <Form setCategory={setCategory}/>
      <SeeGifss category={category}/>
      
      <h2>main</h2>
      
      <Footer/>
    </div>
  )
}
export default AppGit
