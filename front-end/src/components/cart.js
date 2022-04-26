import { Link } from "react-router-dom";

const Cart = ({items, order, changeQuantity, removeItem})=>{
  

  return(
    <div className="container mb-5">
      <div className="d-flex flex-row align-items-start">
     
        <div className="col-8 d-flex flex-column m-2">
        <h2>Cart : {!items.length?'No Items in Cart': null}</h2>
          {items.map(item=><div className="cart-item p-3">
            <div className="d-flex flex-row">
              <img
                className="col-2 img-fluid"
                src={`images/${item.image}.jpg`}
                alt=""
              />
              <div className="col-6 p-2">
                <h5>{item.name}</h5>
                <h6>quantity :{item.quantity}</h6>
                <p>${item.price}</p>
              </div>
              <div className="col-2 p-2">
                Quatity
                <select name="" id="" value={item.quantity} onChange={(e)=>changeQuantity(e.target.value, item)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div onClick={()=>removeItem(item)}
                className="col-2 d-flex justify-content-end align-items-start close"
              >
                <i className="bi bi-x-circle"></i>
              </div>
            </div>
          </div>)}
          
        </div>
       {order.items.length? <div className="col-4 order p-3 m-2">
          <h4>Order Total</h4>
          <div className="d-flex flex-row py-2">
            <input type="text" className="form-control" placeholder="promo code" />
            <button className="btn btn-primary">Apply</button>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Items</span>
            <span className="billing-cost">{order.total_items}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Item Cost</span>
            <span className="billing-cost">${order.total_cost}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Shipping</span>
            <span className="billing-cost">${order.shipping_charges}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item">Discount ({order.discount_in_percent}%)</span>
            <span className="billing-cost">-${order.total_cost*order.discount_in_percent/100}</span>
          </div>
          <div className="d-flex flex-row justify-content-between p-2">
            <span className="billing-item fs-5">Total</span>
            <span className="billing-cost fs-5">${order.total_cost-order.total_cost*order.discount_in_percent/100+order.shipping_charges }</span>
          </div>

          <div className="d-flex mt-3">
              <Link to="/checkout" className="btn btn-primary flex-grow-1">Pay Now</Link>
          </div>
        </div>:null}
      </div>
    </div>
)};

export default Cart;