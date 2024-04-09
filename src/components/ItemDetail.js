import '../styles/itemDetail.css'

const ItemDetail = ({nombre, pictureUrl, precio}) => {
  return (
    <div className='detail-container'>
            <h1>Detalle</h1>
            <div className='img-container'>
                <img src={pictureUrl} alt={nombre}/>
            </div>
            <div className='img-container'>
                <h4 className='text-black'>{nombre}</h4>
                <h5 className='text-black'>$ {precio}</h5>
            </div>
        </div>
  )
}

export default ItemDetail