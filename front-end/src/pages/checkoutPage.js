import Nav from '../components/navbar';
import Footer from '../components/footer';
import Checkout from '../components/checkout';
import {useDispatch, useSelector} from 'react-redux'
import { ADD_ADDRESS,SET_SHIP_ADDRESS,PLACE_ORDER,EMPTY_CART, addAddressAC, setShipAddressAC, placeOrderAC, emptyCartAC } from '../actions';
import { useNavigate } from 'react-router-dom';


const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)
  const user = useSelector(state=>state.user);

  const addAddress = (address)=>{
    dispatch(addAddressAC(address))
  }
  const setShipAddress = (address)=>{
    dispatch(setShipAddressAC(address))
  }
  const placeOrder = ()=>{
    if(order.shipping_address){
      dispatch(placeOrderAC(order,navigate));
      dispatch(emptyCartAC());
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