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
        setError(false);
        setCategory(value);
        setValue("");
    }
  return (  //Aquí estamos recolectando el valor digitado por el usuario, cambiando su estado y ejecutando el metodo searchGif
  <section className="form flex items-start justify-center mt-8">
  <form onSubmit={searchGif} className="bg-gray-100 p-4 rounded-md shadow-md">
    <input
      type="text"
      placeholder="Digita la categoría... "
      onChange={(e) => setValue(e.target.value)}
      value={value}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    />
    {error ? <p className="text-red-500 text-sm mt-2">El campo no puede estar vacío</p> : ''}
  </form>
</section>
  )
}
