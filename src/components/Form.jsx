import { useState } from "react"


export const Form = () => {
    const [value, setValue] = useState("");


  return (
    <section className="form">
        {value}
        <form action="">
            
            <input type="text" placeholder="Digita la categoria"
            onChange={e=>setValue(e.target.value)}/>
        </form>
    </section>
  )
}
