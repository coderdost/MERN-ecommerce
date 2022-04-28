import axios from 'axios';

export const CHANGED_ITEM_IN_CART ='CHANGED_ITEM_IN_CART';
export const CHANGE_ORDER_CART = 'CHANGE_ORDER_CART';
export const CHANGED_QUANTITY = 'CHANGED_QUANTITY';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const SET_SHIP_ADDRESS = 'SET_SHIP_ADDRESS';
export const PLACE_ORDER = 'PLACE_ORDER';
export const EMPTY_CART = 'EMPTY_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INIT_PRODUCTS = 'INIT_PRODUCTS';
export const INIT_CART = 'INIT_CART';

export const initializeProductsAC = ()=>{  
    return function(dispatch){
        axios.get('http://localhost:8080/product').then(function (response) {
            console.log(response);
            dispatch({type:INIT_PRODUCTS, payload: response.data})
          })
          .catch(function (error) {
            console.log(error);
          })  
    }
}

export const initializeCartAC = ()=>{  
    return function(dispatch){
        axios.get('http://localhost:8080/cart').then(function (response) {
            console.log(response);
            dispatch({type:CHANGED_ITEM_IN_CART, payload: response.data})
          })
          .catch(function (error) {
            console.log(error);
          })  
    }
}

export const addToCartAC = (product)=>{  //AC = Action Creator
    return function(dispatch){
       changeCart(dispatch,product);
    }
}
export const changeOrderWithCart = (cartItems)=>{
    return function(dispatch){
            dispatch({type:CHANGE_ORDER_CART, payload:cartItems})
    }
}
export const changeQuantityAC = (item)=>{  //AC = Action Creator
    return function(dispatch){
           changeCart(dispatch,item);

            // dispatch({type:CHANGED_QUANTITY, payload:item})
    }
}
export const addAddressAC = (address)=>{  //AC = Action Creator
    return function(dispatch){
            dispatch({type:ADD_ADDRESS, payload:address})
    }
}
export const setShipAddressAC = (address)=>{  //AC = Action Creator
    return function(dispatch){
            dispatch({type:SET_SHIP_ADDRESS, payload:address})
    }
}
export const placeOrderAC = (order)=>{  //AC = Action Creator
    return function(dispatch){
            dispatch({type:PLACE_ORDER, payload:order})
    }
}
export const emptyCartAC = ()=>{  //AC = Action Creator
    return function(dispatch){
            dispatch({type:EMPTY_CART,})
    }
}
export const removeItemAC = (item)=>{  //AC = Action Creator
    return function(dispatch){
            dispatch({type:REMOVE_ITEM,payload:item})
    }
}

function changeCart(dispatch, item){
    axios.post('http://localhost:8080/cart',{item:item}).then(function (response) {
        console.log(response);
        dispatch({type:CHANGED_ITEM_IN_CART, payload:response.data})
      })
      .catch(function (error) {
        console.log(error);
      })  
}