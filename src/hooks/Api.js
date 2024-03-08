import { useEffect, useState } from "react"


export const Api = (url) => {
 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchA = ()=>{
        fetch(url) // esto devuelve una promesa
        .then(respuesta => respuesta.json()) // la respuesta a la profesa la vamos a devolver parceada
        .then(respuestaJson =>{
            setLoading(true);
            setData(respuestaJson.data)
            
        })
        .catch(error => console.log(error))

    }
    useEffect(() =>{
        fetchA();
    })

    return{loading, data}
  
}
