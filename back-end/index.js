const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const PORT = 8080;
const app  = express();
const cors = require('cors');
const json = require('body-parser').json;
const session = require('express-session')

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST'],
    credentials: true
}))
app.use(json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));

const productSchema = new Schema({
    name:  {type:String, required:true}, 
    category: {type:String, required:true},
    price:   {type:Number, required:true},
    rating: {type:Number, required:true},
    color: 'red' | 'green' | 'black',
    size: 'S' | 'M' | 'L',
    details: Object,
    image : {type:String, required:true},
    images : {type:[String], required:true},
  }, {timestamps: true});

const cartSchema = new Schema({
    items:  {type:[Object], required:true, default:[]}, 
    userId: {type: String, default:1}
}, {timestamps: true});

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    username: String,
    addresses : {type:[Object], default:[]},
    orders :[{ type: Schema.Types.ObjectId, ref: 'Order' }]
}, {timestamps: true});

const orderSchema = new Schema({
    items: [Object],
    shipping_charges: Number,
    discount_in_percent: Number,
    shipping_address: Object,
    total_items: Number,
    total_cost: Number,
}, {timestamps: true}) 

const Product = new mongoose.model('Product',productSchema);  
const Cart = new mongoose.model('Cart',cartSchema);
const User = new mongoose.model('User',userSchema);
const Order = new mongoose.model('Order',orderSchema);

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Server Connected');
    // Write Code Here
}


// app.get('/createProduct',(req,res)=>{
//     let product = new Product({
//         id: 3,
//         name: 'Apple iPhone 11',
//         price: 799.75,
//         category: 'Mobile',
//         rating: 4,
//         color: 'black',
//         size: '',
//         details: {
//           product: '',
//           warranty: '',
//           merchant: '',
//         },
//         image: 'product-3-square',
//         images: ['product-3', 'product-3-2', 'product-3-3'],
    
//     })
//     product.save().then((success)=>{
//         res.send(success)
//     }).catch(err=>{
//         res.error(err)
//     })

    
// })
// app.get('/createUser',(req,res)=>{
//    let user = new User({
//        name : 'John',
//        email: 'demo@example.com',
//        orders: [],
//        addresses:[]
//    });
//    user.save().then(usr=>{
//        res.send(usr)
//    })
// });

app.post('/login',(req,res)=>{
    console.log(req.body.user);
    User.findOne({username: req.body.user.username, password:req.body.user.password}).populate('orders').then(result=>{
        if(result){
            req.session.user = result;
            res.send({status:true, user:result});
        } else{
            res.status(404).send({status:false});
        }
        
    })
})

app.get('/logout',(req,res)=>{
   req.session.user = null;
   res.send({status: true})
})

app.post('/signup',(req,res)=>{


    let user = new User({...req.body.user, email: req.body.user.username, orders:[]})
   
    User.findOne({username:req.body.user.username}).then(result=>{
        if(result){
            res.status(404).send({status:false});
        } else {
            user.save().then(usr=>{
                req.session.user = usr;
                res.send({status:true, user:usr});
            })
        }
    });

  
})

app.get('/user',(req,res)=>{
  if(req.session.user){
    User.findOne({username: req.session.user.username}).populate('orders').then(result=>{
            req.session.user = result;
            res.send({status:true, user:result});
    })
  } else {
    res.send({status:false});
  }
});
// you will need to call this for order updates. Not the best solution. you can make and Order GET API also.



app.get('/product',(req,res)=>{
   Product.find({}).then(result=>{
       res.send(result);
   })
});

app.post('/cart',(req,res)=>{
    
    const userId = req.session.user._id;  // This will be solved by Sessions
    const item = req.body.item;
    if(!item.quantity){
        item.quantity =1;
    }
    Cart.findOne({userId:userId}).then(result=>{
        if(result){
            const itemIndex = result.items.findIndex(it=>it._id==item._id);
            if(itemIndex>=0){
                result.items.splice(itemIndex,1,item);
            } else{
                result.items.push(item);
            }
            result.save().then(cart=>{
                res.send(cart);
            })   
        } else{
            let cart = new Cart();
            cart.userId = userId;
            cart.items = [item];
            cart.save().then(cart=>{
                res.send(cart);
            })    
        }
        
       
    })
 });
app.get('/cart',(req,res)=>{
    
    const userId = req.session.user._id;
    Cart.findOne({userId:userId}).then(result=>{
        if(result){
            res.send(result)
        } else {
            res.send({userId:1, items: []}) 
        }  
    });

 });
app.post('/removeItem',(req,res)=>{
    
    const userId = req.session.user._id;
    const item = req.body.item;
    Cart.findOne({userId:userId}).then(result=>{

        const itemIndex = result.items.findIndex(it=>it._id==item._id);
        result.items.splice(itemIndex,1);
        result.save().then(cart=>{
            res.send(cart)
        })
    });

 });
app.post('/emptyCart',(req,res)=>{
    
    const userId = req.session.user._id;
    Cart.findOne({userId:userId}).then(result=>{
        result.items = [];
        result.save().then(cart=>{
            res.send(cart)
        })
    });

 });

app.post('/updateUserAddress',(req,res)=>{
    const userId = req.session.user._id;
    const address = req.body.address;
    User.findOne({userId:userId}).then((user)=>{
     user.addresses.push(address);
     user.save().then(user=>{
         res.send(address);
     })
    })
}) 

app.post('/order',(req,res)=>{
    const userId = req.session.user._id;
    const order = req.body.order;
    
    let newOrder = new Order(order);
    newOrder.save().then(savedOrder=>{
        User.findOne({userId:userId}).then((user)=>{
            user.orders.push(savedOrder._id);
            user.save().then(user=>{
                res.send(savedOrder);
            })
           })
    })
   

  
})





app.listen(PORT, ()=>{
   console.log('listen on PORT:', PORT)
})