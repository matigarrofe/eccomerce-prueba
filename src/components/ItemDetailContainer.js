import { useState, useEffect } from "react";
import data  from "../Data/mock-data";
import  ItemDetail  from "./ItemDetail";
import { useParams } from "react-router-dom";
import '../styles/itemDetailContainer.css'

const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const item = data.find(item=>item.id === parseInt(id));
            resolve(item)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            
            setItem(producto);
        }
        getProducto();
    },[productId])

    return(
        <div className="item-detail-container">
            <p>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}
export default ItemDetailContainer