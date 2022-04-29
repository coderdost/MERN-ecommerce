import LoginSignup from '../components/login-signup';
import Footer from '../components/footer';
import {useDispatch} from 'react-redux';
import { loginAC, signupAC } from '../actions';

const LoginSignupPage = () => {
 const dispatch = useDispatch();
 const login = (user)=>{
   dispatch(loginAC(user));
 }
 const signup = (user)=>{
  dispatch(signupAC(user));
}

  return (
     <>
     <LoginSignup login={login} signup={signup}></LoginSignup>
     <Footer></Footer>
     </> 
  );
}

export default LoginSignupPage;