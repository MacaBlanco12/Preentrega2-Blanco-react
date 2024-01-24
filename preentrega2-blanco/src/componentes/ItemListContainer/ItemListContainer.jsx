import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getZonas, getZonasPorCategoria } from "../../../asyncmock"; 
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [zonas, setZonas] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    const funcionZonas = idCategoria ? getZonasPorCategoria : getZonas;

    funcionZonas(idCategoria)
      .then(res => setZonas(res))
      .catch(error => console.log(error))

  }, [idCategoria])

  return (
    <div>
      <h2> Promociones</h2>
      <ItemList zonas={zonas}/>
    </div>
    
  )
}

export default ItemListContainer