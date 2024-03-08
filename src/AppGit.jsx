import {HHeader} from "./components/HHeader"
import {Footer} from "./components/Footer"
import { Form } from "./components/Form"
import { useState } from "react"
import { SeeGifss } from "./components/SeeGifss";

function AppGit(){ //aquí llamamos a cada componente
  const [category, setCategory]= useState(null);
  return(
    <div > 
      <HHeader/>
      <Form setCategory={setCategory}/>
      <SeeGifss category={category}/>
      <Footer/>
    </div>
  )
}
export default AppGit
