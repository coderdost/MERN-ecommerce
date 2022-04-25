import { ADD_TO_CART, CHANGE_ORDER_CART, CHANGED_QUANTITY,ADD_ADDRESS } from '../actions';

const initialStateProducts = {
  products: [
    {
      id: 1,
      name: 'Sony WX-5',
      price: 100.75,
      category: 'Headphones',
      rating: 3,
      color: 'red',
      size: 'S',
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product-1-square',
      images: ['product-1-square', 'product-1-square', 'product-1-square'],
    },
    {
      id: 2,
      name: 'Apple Watch 2',
      price: 500.75,
      category: 'SmartWatch',
      rating: 4,
      color: 'black',
      size: '',
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product-2-square',
      images: ['product-2-square', 'product-2-square', 'product-2-square'],
    },
    {
      id: 3,
      name: 'Apple iPhone 11',
      price: 799.75,
      category: 'Mobile',
      rating: 4,
      color: 'black',
      size: '',
      details: {
        product: '',
        warranty: '',
        merchant: '',
      },
      image: 'product-3-square',
      images: ['product-3-square', 'product-3-square', 'product-3-square'],
    },
  ],
};

const initialStateCart = {
  items: [],
};

const initialStateOrder = {
  items: [],
  shipping_charges: 50,
  discount_in_percent: 10,
  shipping_address: '',
  total_items: 0,
  total_cost: 0,
};

const initialStateUser = {
  name: 'John',
  email: 'john@example.com',
  addresses: [
    {
      first_name: 'John',
      last_name: 'Smith',
      address1: '123',
      address2: 'New Street',
      country: 'India',
      state: 'Delhi',
      pin_code: 110006,
      phone:'+91-123456633'
    },
    {
      first_name: 'John',
      last_name: 'Doe',
      address1: '245',
      address2: 'Old Street',
      country: 'India',
      state: 'Delhi',
      pin_code: 110007,
      phone:'+91-444444422'
    },
  ],
  orders: [],
};

const productReducer = (state = initialStateProducts, action) => {
  return state;
};

const cartReducer = (state = initialStateCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    case CHANGED_QUANTITY:
      const oldItem = state.items.find((item) => item.id === action.payload.id);
      const index = state.items.indexOf(oldItem);
      const newItems = [...state.items];
      newItems[index] = action.payload;
      return { ...state, items: newItems };
    default:
      return state;
  }
};

const orderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case CHANGE_ORDER_CART:
      const items = action.payload;
      const total_items = items.reduce(
        (total, item) => total + item.quantity * 1,
        0
      );
      const total_cost = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return { ...state, items: action.payload, total_items, total_cost };
    default:
      return state;
  }
};

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {...state, addresses:[...state.addresses,action.payload]}
    default:
      return state;
  }
};

export { productReducer, cartReducer, orderReducer,userReducer };
