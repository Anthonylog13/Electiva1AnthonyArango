import { useState } from "react"


export const Form = ({ setCategory }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const searchGif = e=>{
        e.preventDefault();
        if(value === ""){
            setError(true);
            return;
        }

        console.log("enter form")
    }

  return (  //Aquí estamos recolectando el valor digitado por el usuario, cambiando su estado y ejecutando el metodo searchGif

    <section className="form">
        {value}
        <form onSubmit={searchGif}>
            
            <input type="text" placeholder="Digita la categoria"
            onChange={e=>setValue(e.target.value)}/>
        </form>
        {error ? <p className="error">El campo no puede estar vacio </p>:""} 
        
    </section>
  )
}
