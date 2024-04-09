import '../styles/item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, pictureUrl }) => {
  return (
    <>
      <div class="card" id="tarjetas">
        <img src={pictureUrl} class="card-img-top" alt={nombre} />
        <div class="card-body">
          <h5 class="card-title text-center">{nombre}</h5>
          {/* <p class="card-text">{desc}</p> */}
          <h4 className='text-center'>Precio: ${precio}</h4>  
          <Link to={`/item/${id}`}>
            <button className='btn btn-warning w-100'>Detalle</button>
          </Link>
          
        </div> 
      </div>
    </>
  );
};

export default Item;

