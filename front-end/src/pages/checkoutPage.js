import Nav from '../components/navbar';
import Footer from '../components/footer';
import Checkout from '../components/checkout';
import {useDispatch, useSelector} from 'react-redux'
import { ADD_ADDRESS,SET_SHIP_ADDRESS,PLACE_ORDER,EMPTY_CART } from '../actions';


const CheckoutPage = () => {
  const dispatch = useDispatch();  
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)
  const user = useSelector(state=>state.user);

  const addAddress = (address)=>{
    dispatch({type:ADD_ADDRESS, payload:address})
  }
  const setShipAddress = (address)=>{
    dispatch({type:SET_SHIP_ADDRESS, payload:address})
  }
  const placeOrder = ()=>{
    if(order.shipping_address){
      dispatch({type:PLACE_ORDER, payload:order});
      dispatch({type:EMPTY_CART});
    }else{
      alert('Choose a Shipping Address');
    }
  }
  
  return (
     <>
     <Nav cartCount={cartItems.length}></Nav>
     <Checkout order={order} user={user} addAddress={addAddress} setShipAddress={setShipAddress} placeOrder={placeOrder}></Checkout>
     <Footer></Footer>
     </> 
  );
}

export default CheckoutPage;