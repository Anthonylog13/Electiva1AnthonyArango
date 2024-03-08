import { useState } from "react";
import { useEffect } from "react";

export const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const fetchApi = ()=>{

        fetch(url) // esto devuelve una promesa
        .then(respuesta => respuesta.json()) // la respuesta a la profesa la vamos a devolver parceada
        .then(respuestaJson =>{
            setLoading(true);
            setData(respuestaJson.data)
            console.log(respuestaJson);
            
        })
        .catch(error => console.log(error))

    }
    
    useEffect(() =>{
        fetchApi();
    },[url])

    return { loading, data}
}
