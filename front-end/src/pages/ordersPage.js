import Nav from '../components/navbar';
import Footer from '../components/footer';
import Orders from '../components/orders';
import {useDispatch, useSelector} from 'react-redux'



const OrdersPage = () => {
  const dispatch = useDispatch();  
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)
  const user = useSelector(state=>state.user)


  
 

  return (
     <>
     <Nav cartCount={cartItems.length}></Nav>
     {user.orders.map(order=><Orders items={order.items} order={order}></Orders>)}
     <Footer></Footer>
     </> 
  );
}

export default OrdersPage;