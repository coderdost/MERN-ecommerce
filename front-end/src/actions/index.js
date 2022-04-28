import axios from 'axios';

export const ADD_TO_CART ='ADD_TO_CART';
export const CHANGE_ORDER_CART = 'CHANGE_ORDER_CART';
export const CHANGED_QUANTITY = 'CHANGED_QUANTITY';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const SET_SHIP_ADDRESS = 'SET_SHIP_ADDRESS';
export const PLACE_ORDER = 'PLACE_ORDER';
export const EMPTY_CART = 'EMPTY_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INIT_PRODUCTS = 'INIT_PRODUCTS';

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


export const addToCartAC = (product)=>{  //AC = Action Creator
    return function(dispatch){
        axios.post('http://localhost:8080/cart',{item:product}).then(function (response) {
            console.log(response);
           // dispatch({type:ADD_TO_CART, payload:product})
          })
          .catch(function (error) {
            console.log(error);
          })  
    }
}
export const changeOrderWithCart = (cartItems)=>{
    return function(dispatch){
            dispatch({type:CHANGE_ORDER_CART, payload:cartItems})
    }
}
export const changeQuantityAC = (item)=>{  //AC = Action Creator
    return function(dispatch){
            dispatch({type:CHANGED_QUANTITY, payload:item})
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