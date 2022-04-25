import ProductList from '../components/product-list';
import Nav from '../components/navbar';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import {useDispatch, useSelector} from 'react-redux'
import { ADD_TO_CART } from '../actions';


const Home = () => {
  const dispatch = useDispatch();  
  const products = useSelector(state=>state.product.products)
  const cartItems = useSelector(state=>state.cart.items)

  const addToCart = (product)=>{
    dispatch({type:ADD_TO_CART,payload:product})
  }

  return (
     <>
     <Nav cartCount={cartItems.length}></Nav>
     <Carousel></Carousel>
     <ProductList products={products} addToCart={addToCart}></ProductList>
     <Footer></Footer>
     </> 
  );
}

export default Home;