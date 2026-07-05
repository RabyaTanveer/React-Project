import { useParams } from "react-router-dom";
import { useEffect,useState ,useContext} from "react";
import { CartContext, } from "../context/CartContextProvider";

const ProductDetailPage = () => {
  const [product,setProducts] =useState(null)
  const {id} = useParams();
  const { addToCart } = useContext(CartContext);
  // const product = products.find((product) => Number(id) === product.id );
const getProduct=async ()=>{
  const request =await fetch(`https://fakestoreapi.com/products/${id}`)
  const res=await request.json()
  console.log(res);
  setProducts(res)
}
useEffect(()=>{
  getProduct()
},[])
if(!product){
  return;
}

  return (
    <div className="product_item" style={{width:"100%"}}>
      <img src={product.image} alt="" />
      <span style={{ display: "block" }}>{product.price} $</span>
        <h2>{product.title}</h2>
      <button onClick={() => {addToCart(product); alert(`${product.title} added to cart`)}}>
        Add To Cart
      </button>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductDetailPage;