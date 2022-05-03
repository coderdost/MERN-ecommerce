import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAC } from "../actions";
const Nav = ({cartCount})=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">E-shopper</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/#products">Cameras</a></li>
                  <li><a className="dropdown-item" href="/#products">Apple Gadgets</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/#products">Drones</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" tabindex="-1">
                  Cart<i className="bi bi-cart-plus-fill"></i> 
                  <span className="cart-badge badge bg-success">{cartCount}</span></Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 mx-lg-2 order-sm-last">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="myaccount" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Account
                </a>
                <ul className="dropdown-menu bg-dark text-light" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/myorders" >My Orders</Link></li>
                  <li><a className="dropdown-item" href="/#" data-bs-toggle="modal" data-bs-target="#exampleModal">Profile</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li onClick={(e)=>{dispatch(logoutAC(navigate))}}><a className="dropdown-item" >Logout</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex search-form">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-success" type="submit" data-bs-toggle="tooltip" data-bs-placement="left" title="Search for all products">
                <i className="bi bi-search"></i>
              </button>
            </form>
           
          </div>
        </div>
      </nav>
)}

export default Nav;