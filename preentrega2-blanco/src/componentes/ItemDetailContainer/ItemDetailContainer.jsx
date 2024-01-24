import { useState, useEffect } from "react";
import { getUnaZona } from "../../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [zona, setZona] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getUnaZona(id)
      .then(res => setZona(res))
      .catch(error => console.error('Error al obtener detalles del artículo:', error));

  }, [id])

  return (
    <div>
      {zona && <ItemDetail {...zona} />}    </div>
  )
}

export default ItemDetailContainer