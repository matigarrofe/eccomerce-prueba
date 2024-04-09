import Item from './Item'
import '../styles/itemList.css'


const ItemList = ({ itemsList }) => {
  
  
    return (
    
        <>
        <div className="estilos-listado" >
            {itemsList.map((producto)=> {
                return (
                     <Item 
                     key={producto.id}
                     nombre={producto.nombre} 
                     desc={producto.desc}
                     precio={producto.precio}
                     pictureUrl={producto.pictureUrl}/>
                )
            })}
            </div>
        </>
      
  );
};

export default ItemList;
