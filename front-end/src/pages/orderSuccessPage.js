import { useParams } from "react-router-dom";
import Footer from "../components/footer"


const OrderSuccessPage = ()=>{
    const params = useParams();

    return(
    <>
    <div class="container my-5">
        <div>
            <h1 class="text-center">e-Shopper</h1>
        </div>

        <div class="d-flex justify-content-center">
           

            <div class="login-box m-auto mt-5 col-4 text-center">
                <h3 class="text-center">Order #{params.orderid} Successful</h3>

                <i class="bi bi-check-circle-fill text-success success-icon"></i>
                 
                <h6>We will deliver your order in X days</h6>
                <a href="/">Go Back To Home</a>
            </div>

        </div>
   
    </div>
    <Footer></Footer>
    </>
    )
}

export default OrderSuccessPage;