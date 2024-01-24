import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({zonas}) => {
  return (
    <div className="contenedorProductos">
        {zonas.map(z => <Item key={z.id}  {...z} />)}
    </div>
  )
}

export default ItemList