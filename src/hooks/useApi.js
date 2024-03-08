import { useState } from "react";
import { useEffect } from "react";
export const useApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchApi = ()=>{
        fetch(url) // esto devuelve una promesa
        .then(response => response.json()) // la respuesta a la profesa la vamos a devolver parceada
        .then(responseJson =>{
            setLoading(true);
            setData(responseJson.data)
            console.log(responseJson);
        })
        .catch(error => console.log(error))
    }
    useEffect(() =>{
        fetchApi();
    },[url])
    return { loading, data}
}
