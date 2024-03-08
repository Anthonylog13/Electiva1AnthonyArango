
import { useApi } from "../hooks/useApi";
import { Items } from "./Items";



export const SeeGifss = ({category}) => { //Aquí obtenemos la categoria ingresada y hacemos la llamada a la api
    const url= 'https://api.giphy.com/v1/gifs/search?api_key=fefdmYM5onwYJJrrMOcErXE5QzF7iDV6&q='+category;
    const {loading, data} = useApi(url);
    
  return (
    <div className="container-gifs">
        <h2>Categoria: </h2>
        {
            loading ?
            data.map(img =>(
                <Items key={img.id} title={img.title} url={img.images.downsized_medium.url}/>
            ))
            : ''
        }
       
    </div>
  )
}
