import data from "../Data/mock-data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import '../styles/itemListContainer.css'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const {categoryId} = useParams()



  const [items, setItems] = useState([]);

  const traerData = new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    traerData.then((result) => {
      if (categoryId){
        const newProdutos = result.filter(item=>item.categoria === categoryId)
        setItems(newProdutos);
      }
      else {
        setItems(result);
      }
      // console.log(result);
    });
  }, [categoryId]);

  return (
    <>
        {items.length > 0 ? (<ItemList itemsList={items} />)
        :
        (

            
            <div className="loading">Cargando...</div>
        )
        }


        
    </>
  );
};

export default ItemListContainer;
