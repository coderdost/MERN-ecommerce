const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const PORT = 8080;
const app  = express();
const cors = require('cors');
const json = require('body-parser').json;

app.use(cors())
app.use(json());

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
    addresses : [Object],
    orders :[Object]
}, {timestamps: true});

const Product = new mongoose.model('Product',productSchema);  
const Cart = new mongoose.model('Cart',cartSchema);
const User = new mongoose.model('User',userSchema);

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

app.get('/user',(req,res)=>{
    User.findOne({}).then(result=>{
        res.send(result);
    })
})


app.get('/product',(req,res)=>{
   Product.find({}).then(result=>{
       res.send(result);
   })
});

app.post('/cart',(req,res)=>{
    
    const userId = "626a8c0054197ff8a6671b2b";  // This will be solved by Sessions
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
    
    const userId = "626a8c0054197ff8a6671b2b";
    Cart.findOne({userId:userId}).then(result=>{
        if(result){
            res.send(result)
        } else {
            res.send({userId:1, items: []}) 
        }  
    });

 });
app.post('/removeItem',(req,res)=>{
    
    const userId = "626a8c0054197ff8a6671b2b";
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
    
    const userId = "626a8c0054197ff8a6671b2b";
    Cart.findOne({userId:userId}).then(result=>{
        result.items = [];
        result.save().then(cart=>{
            res.send(cart)
        })
    });

 });

app.post('/updateUserAddress',(req,res)=>{
    const userId = "626a8c0054197ff8a6671b2b";
    const address = req.body.address;
    User.findOne({userId:userId}).then((user)=>{
     user.addresses.push(address);
     user.save().then(user=>{
         res.send(address);
     })
    })
}) 

app.post('/order',(req,res)=>{
    const userId = "626a8c0054197ff8a6671b2b";
    const order = req.body.order;
    User.findOne({userId:userId}).then((user)=>{
     user.orders.push(order);
     user.save().then(user=>{
         res.send(order); // you can have orderSchema and orderId
     })
    })
})





app.listen(PORT, ()=>{
   console.log('listen on PORT:', PORT)
})