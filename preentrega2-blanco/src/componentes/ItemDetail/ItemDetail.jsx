import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';


const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const manejadorCantidad =  (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Zonas agregadas: " + cantidad);
  }

  return (
    <div className='contenedorItem'>
      
                <>
                    <h2>Nombre: {nombre}</h2>
                    <h3>Precio: {precio}</h3>
                    <p>ID: {id}</p>
                    <p>Stock: {stock}</p>
                    <p>Requiere entre 10 y 12 sesiones</p>
                    <img src={img} alt={nombre} />

                    {agregarCantidad > 0 ? (<Link to="/cart">Terminar compra</Link>) : (<ItemCount inicial={1} stock={5} funcionAgregar={manejadorCantidad} />)}
                </>
           
    </div>
  )
}

export default ItemDetail