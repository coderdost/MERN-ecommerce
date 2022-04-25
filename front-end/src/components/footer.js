const Footer = ()=>(
    <div class="footer mt-auto bg-dark text-light">
        <div class="container py-3">
            <div class="row d-flex footer-items">
                <div class="col-lg-4">
                    <h5>Categories</h5>
                    <ul>
                        <li><a href="#">Watches</a></li>
                        <li><a href="#">Mobiles</a></li>
                        <li><a href="#">Tablets</a></li>
                        <li><a href="#">Audio</a></li>
                        <li><a href="#">Drones</a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                   <h5>Useful Links</h5>
                   <ul>
                       <li><a href="#">Terms</a></li>
                       <li><a href="#">Privacy</a></li>
                       <li><a href="#">About us</a></li>
                       <li><a href="#">Mission</a></li>
                   </ul>
               </div>
               <div class="col-lg-4">
                   <h5>Get Updates</h5>
                   <div class="d-flex subscribe">
                       <input type="text" class="form-control"/>
                       <button class="btn btn-warning">Subscribe</button>
                   </div>
                   <div class="mt-2">
                    <div class="btn-group me-2 social-icons" role="group" aria-label="First group">
                      <button type="button" class="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center">
                        <i class="bi bi-facebook"></i>
                      </button>
                      <button type="button" class="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center">
                        <i class="bi bi-instagram"></i>
                      </button>                      
                      <button type="button" class="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center">
                        <i class="bi bi-twitter"></i>
                      </button>                      
                      <button type="button" class="btn btn-secondary mx-1 d-flex flex-column justify-content-center align-items-center">
                        <i class="bi bi-linkedin"></i>
                      </button>                   
                     </div>
                   </div>
               </div>
           </div>
           <div class="row text-center">
             <span>@coderdost</span>
           </div>
        </div>
     
    </div>
)

export default Footer;