import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useContext, useEffect, useState } from "react";



function ProductList() {
  const [products, setProducts]=useState([]);
  useEffect(()=>
  {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then (data=> setProducts(data))
  },[])
// const request =await fetch ("")
// const res= await res.json()
// console.log("res:",res);


  return (
    <div className="product_container">
      {products.map((product) => {
        return (
          
            <ProductCard product={product} />
        );
      })}
    </div>
  );
}

export default ProductList;


