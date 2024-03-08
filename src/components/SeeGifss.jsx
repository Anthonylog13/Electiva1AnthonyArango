
import { useApi } from "../hooks/useApi";
import { Items } from "./Items";

export const SeeGifss = ({category}) => { //Aquí obtenemos la categoria ingresada y hacemos la llamada a la api
    const url= 'https://api.giphy.com/v1/gifs/search?api_key=fefdmYM5onwYJJrrMOcErXE5QzF7iDV6&q='+category;
    const {loading, data} = useApi(url); 
  return (
    <div className="container-gifs mt-4 p-4 bg-gray-100 rounded-md shadow-md text-center">
  <h2 className="text-2xl font-bold mb-4 inline-block bg-white p-2 rounded-md">
    {category}
  </h2>

  {loading ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((img) => (
        <div
          key={img.id}
          className="bg-white p-4 rounded-md shadow-md text-center"
        >
          <Items title={img.title} url={img.images.downsized.url} />
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500">Cargando...</p>
  )}
</div>
  )
}
