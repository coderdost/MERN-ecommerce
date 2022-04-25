import Nav from '../components/navbar';
import Footer from '../components/footer';
import Checkout from '../components/checkout';
import {useDispatch, useSelector} from 'react-redux'
import { ADD_ADDRESS } from '../actions';


const CheckoutPage = () => {
  const dispatch = useDispatch();  
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)
  const user = useSelector(state=>state.user);

  const addAddress = (address)=>{
    dispatch({type:ADD_ADDRESS, payload:address})
  }
  
  return (
     <>
     <Nav cartCount={cartItems.length}></Nav>
     <Checkout order={order} user={user} addAddress={addAddress}></Checkout>
     <Footer></Footer>
     </> 
  );
}

export default CheckoutPage;