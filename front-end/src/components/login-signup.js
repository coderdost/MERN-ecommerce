import { useEffect, useState } from "react";
const LoginSignup = ({login,signup})=>{
    const blank_user = {username:'',password:'',name:''}
    const [showLogin, setShowLogin] = useState(true);
    const [user, setUser] = useState(blank_user)

    useEffect(()=>{
      setUser(blank_user)
    },[showLogin])

    const validateLogin = (user)=>{
        if(!user.username || !user.password){
          alert('Please enter a required value')
        } else{
          login(user)
        }
    }

    const validateSignup = (user)=>{
      if(!user.username || !user.password || !user.name){
        alert('Please enter a required value')
      } else{
        signup(user)
      }
  }

    return(<div class="container my-5">
        <div>
          <a href="/" class="logo">
            <h1 class="text-center">e-Shopper</h1>
          </a>        
        </div>

        <div class="d-flex justify-content-center">
           

            {showLogin ?<div class="login-box m-auto mt-5 col-4">
                <h3 class="text-center">Login</h3>
                <form class="needs-validation" novalidate="" action="" onSubmit={e=>{e.preventDefault();validateLogin(user)}}>

                  <div>
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="Email" value={user.username} onChange={e=>setUser({...user,username:e.target.value})} />
                    <div class="invalid-feedback">
                      Valid Email required
                    </div>
                  </div>
                  <div>
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="password" minlength="6" value={user.password} onChange={e=>setUser({...user,password:e.target.value})}/>
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
              <form class="needs-validation" novalidate="" action="" onSubmit={e=>{e.preventDefault();validateSignup(user)}}>
                <div>
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" placeholder="Full Name" value={user.name} onChange={e=>setUser({...user,name:e.target.value})}/>
                  <div class="invalid-feedback">
                    Name required
                  </div>
                </div>
                <div>
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" placeholder="Email" value={user.username} onChange={e=>setUser({...user,username:e.target.value})} />
                  <div class="invalid-feedback">
                    Valid Email required
                  </div>
                </div>
                <div>
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" placeholder="password"  minlength="6" value={user.password} onChange={e=>setUser({...user,password:e.target.value})}/>
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