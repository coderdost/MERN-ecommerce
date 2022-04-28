import { Link } from "react-router-dom";

const ProductList = ({products, addToCart}) =>(
    <div className="container mb-5">
    <div id="products" className="row">
        
       {products.map(product => <div className="col-xl-3 col-lg-4 col-md-6 position-relative">
        
        <div className="card product-item">
          <i className="bi bi-heart-fill position-absolute liked"></i>
          <i className="bi bi-heart position-absolute like"></i>
         <Link to={`/product/${product._id}`}><img src={`images/${product.image}.jpg`} className="card-img-top" alt="..." data-bs-toggle="tooltip" data-bs-placement="top" title="Click to See Product Details"/>
        </Link>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted  fw-light">{product.category}</h6>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text price"> ${product.price} <span className="float-end rating-stars" >
              {[...Array(product.rating)].map(()=><i className="bi bi-star-fill"></i>)}
            </span> </p>
            <div className="text-center">
              <a className="btn btn-dark w-100" onClick={()=>addToCart(product)} role="button" > Add To Cart</a>
            </div>
          </div>
        </div>
    </div>)} 
    </div>
</div>
)

export default ProductList;