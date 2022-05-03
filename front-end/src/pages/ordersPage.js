import Nav from '../components/navbar';
import Footer from '../components/footer';
import Orders from '../components/orders';
import {useDispatch, useSelector} from 'react-redux'



const OrdersPage = () => {
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)
  const user = useSelector(state=>state.user)
  const sorted = [...user.orders].sort((a,b)=>(new Date(b.createdAt)-new Date(a.createdAt)))



  
 

  return (
     <>
     <Nav cartCount={cartItems.length}></Nav>
     <h2>My Orders</h2> 
     {sorted.map(order=><Orders items={order.items} order={order}></Orders>)}
     <Footer></Footer>
     </> 
  );
}

export default OrdersPage;