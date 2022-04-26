import Nav from '../components/navbar';
import Footer from '../components/footer';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/product-details';


const ProductDetailsPage = () => {
  const dispatch = useDispatch();  
  let { productId } = useParams();
  const cartItems = useSelector(state=>state.cart.items)
  const products = useSelector(state=>state.product.products)
  const product = products.find(p=>p.id==productId)
  console.log(productId,products,product);


  return (
     <>
     <Nav cartCount={cartItems.length}></Nav>
     <ProductDetails product={product}></ProductDetails>
     <Footer></Footer>
     </> 
  );
}

export default ProductDetailsPage;