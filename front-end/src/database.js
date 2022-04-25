const db ={
    products :[
        {
            id:1,
            name :'Sony WX-5',
            price: 100.75,
            category: 'Headphones',
            rating:3,
            color:'red',
            size : 'S',
            details : {
                product :"",
                warranty : "",
                merchant:""
            },
            image:'product-1-square',
            images :['product-1-square','product-1-square','product-1-square']
        },
        {
            id:2,
            name :'Apple Watch 2',
            price: 500.75,
            category: 'SmartWatch',
            rating:4,
            color:'black',
            size : '',
            details : {
                product :"",
                warranty : "",
                merchant:""
            },
            image:'product-2-square',
            images :['product-2-square','product-2-square','product-2-square']
        },
        {
            id:3,
            name :'Apple iPhone 11',
            price: 799.75,
            category: 'Mobile',
            rating:4,
            color:'black',
            size : '',
            details : {
                product :"",
                warranty : "",
                merchant:""
            },
            image:'product-3-square',
            images :['product-3-square','product-3-square','product-3-square']
        }
    ]
}


export default db