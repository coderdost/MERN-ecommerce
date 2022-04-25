import {useState} from 'react';
const Checkout = ({order,user, addAddress, setShipAddress, placeOrder})=>{
     const blank_address= {first_name:'',last_name:'',phone:'',address1:'',address2:'',country:'',state:'',pin_code:''}
     const [address,setAddress] = useState(blank_address);
   
     const validateAddress = (address)=>{
       if(!address.first_name || !address.last_name || !address.phone || !address.address1 || !address.country || !address.state || !address.pin_code){
         alert('Enter the required fields')
       }
       else{
         addAddress(address);
         setAddress(blank_address)
       }
     }

    return(
    <div class="container mb-5">
    <main>
      <div class="py-5 text-center">
        <h2>Checkout</h2>
      </div>
  
      <div class="row g-3">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge bg-secondary rounded-pill">{order.total_items}</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Total</h6>
                <small class="text-muted">Cart Items</small>
              </div>
              <span class="text-muted">${order.total_cost}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <small class="text-muted">Shipping Charges</small>
              </div>
              <span class="text-muted">${order.shipping_charges}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <small class="text-muted">Discount </small>
              </div>
              <span class="text-muted">-${order.total_cost*order.discount_in_percent/100}</span>
            </li>
           
           
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${order.total_cost - order.total_cost*order.discount_in_percent/100 + order.shipping_charges}</strong>
            </li>
          </ul>
          {order.shipping_address?<div class="card">
           <div class="card-body">
           <h5 class="card-title">{order.shipping_address.first_name} {order.shipping_address.last_name}</h5>
           <h6 class="card-subtitle mb-2 text-muted ">{order.shipping_address.address1}, {order.shipping_address.address2}, {order.shipping_address.state},{order.shipping_address.country}, {order.shipping_address.pin_code}</h6>
           <p class="card-text">{order.shipping_address.phone}</p>
           </div>
         </div>:null}
  
        </div>
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Shipping address</h4>

         {user.addresses.map(address=>
         <div class="card">
         <div class="card-body">
           <h5 class="card-title">{address.first_name} {address.last_name}</h5>
           <h6 class="card-subtitle mb-2 text-muted ">{address.address1}, {address.address2}, {address.state},{address.country}, {address.pin_code}</h6>
           <p class="card-text">{address.phone}</p>
           <input type="radio" name="address" id="" onClick={e=>setShipAddress(address)}/> Use this Address
         </div>
       </div>
         ) }

          <hr class="my-4"/>
          <h5>OR</h5>

          <h4 class="mb-3">Add New Address</h4>

          <form class="needs-validation" novalidate="" onSubmit={(e)=>{e.preventDefault();validateAddress(address);}}>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value={address.first_name} onChange={e=>setAddress({...address, first_name:e.target.value})}/>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
  
              <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder=""  value={address.last_name} onChange={e=>setAddress({...address, last_name:e.target.value})}/>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
  
  
              <div class="col-12">
                <label for="phone" class="form-label">Phone <span class="text-muted"></span></label>
                <input type="tel" class="form-control" id="phone" placeholder="+91-1111111111" value={address.phone} onChange={e=>setAddress({...address, phone:e.target.value})}/>
                <div class="invalid-feedback">
                  Please enter a valid phone for shipping updates.
                </div>
              </div>
  
              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" value={address.address1} onChange={e=>setAddress({...address, address1:e.target.value})}/>
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
  
              <div class="col-12">
                <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" value={address.address2} onChange={e=>setAddress({...address, address2:e.target.value})}/>
              </div>
  
              <div class="col-md-5">
                <label for="country" class="form-label">Country</label>
                <select class="form-select" id="country" value={address.country} onChange={e=>setAddress({...address, country:e.target.value})}>
                  <option value="">Choose...</option>
                  <option>India</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
  
              <div class="col-md-4">
                <label for="state" class="form-label">State</label>
                <select class="form-select" id="state"  value={address.state} onChange={e=>setAddress({...address, state:e.target.value})} >
                  <option value="">Choose...</option>
                  <option>Delhi</option>
                  <option>UP</option>
                  <option>Rajasthan</option>
                  <option>Haryana</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
  
              <div class="col-md-3">
                <label for="zip" class="form-label">Pin Code</label>
                <input type="text" class="form-control" id="zip" placeholder="" value={address.pin_code} onChange={e=>setAddress({...address, pin_code:e.target.value})} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
  
            <hr class="my-4"/>
  
            <button class="w-100 btn btn-success btn-lg" type="submit">Add Address</button>
          </form>
          <button class="w-100 btn btn-primary btn-lg mt-5" onClick={e=>placeOrder()}>Place Order</button>

        </div>

      </div>
    </main>

  </div>
)};

export default Checkout;