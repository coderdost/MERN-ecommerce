import { useState } from "react";
const LoginSignup = ()=>{

    const [showLogin, setShowLogin] = useState(true);

    return(<div class="container my-5">
        <div>
          <a href="/" class="logo">
            <h1 class="text-center">e-Shopper</h1>
          </a>        
        </div>

        <div class="d-flex justify-content-center">
           

            {showLogin ?<div class="login-box m-auto mt-5 col-4">
                <h3 class="text-center">Login</h3>
                <form class="needs-validation" novalidate="" action="">

                  <div>
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="Email" required=""/>
                    <div class="invalid-feedback">
                      Valid Email required
                    </div>
                  </div>
                  <div>
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="password" required="" minlength="6"/>
                    <div class="invalid-feedback">
                      Valid Password required (min 6 chars)
                    </div>
                  </div>
          
                    <input type="submit" class="form-control btn-success" value="Login"/>
                </form>
                <span class="link" onClick={()=>setShowLogin(false)}>Don't have an account? Create One</span>
            </div>:null}

            {!showLogin ? <div class="login-box m-auto mt-5 col-4">
              <h3 class="text-center">Sign Up</h3>
              <form class="needs-validation" novalidate="" action="">
                <div>
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" placeholder="Full Name" required=""/>
                  <div class="invalid-feedback">
                    Name required
                  </div>
                </div>
                <div>
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" placeholder="Email" required=""/>
                  <div class="invalid-feedback">
                    Valid Email required
                  </div>
                </div>
                <div>
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" placeholder="password" required="" minlength="6"/>
                  <div class="invalid-feedback">
                    Valid Password required (min 6 chars)
                  </div>
                </div>
        
                  <input type="submit" class="form-control btn-success" value="Create Account"/>
              </form>
                <span class="link" onClick={()=>setShowLogin(true)}> Have an account? Login Here</span>

            </div>:null}

        </div>
   
    </div>
)}

export default LoginSignup;