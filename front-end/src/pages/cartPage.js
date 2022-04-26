import Nav from '../components/navbar';
import Footer from '../components/footer';
import Cart from '../components/cart';
import {useDispatch, useSelector} from 'react-redux'
import { CHANGE_ORDER_CART,CHANGED_QUANTITY,REMOVE_ITEM } from '../actions';
import { useEffect } from 'react';


const CartPage = () => {
  const dispatch = useDispatch();  
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)
  useEffect(()=>{
     dispatch({type:CHANGE_ORDER_CART, payload:cartItems})
  },[cartItems])

  const changeQuantity = (quantity,item)=>{
    dispatch({type:CHANGED_QUANTITY, payload:{...item,quantity:quantity}}) 
  }
  const removeItem = (item)=>{
    dispatch({type:REMOVE_ITEM, payload:item}) 
  }
 

  return (
     <>
     <Nav cartCount={cartItems.length}></Nav>
     <Cart items={cartItems} order={order} changeQuantity={changeQuantity} removeItem={removeItem}></Cart>
     <Footer></Footer>
     </> 
  );
}

export default CartPage;