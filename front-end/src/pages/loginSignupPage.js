import LoginSignup from '../components/login-signup';
import Footer from '../components/footer';
import {useDispatch} from 'react-redux';
import { loginAC, signupAC } from '../actions';
import {useNavigate} from 'react-router-dom';

const LoginSignupPage = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const login = (user)=>{
   dispatch(loginAC(user,navigate));
 }
 const signup = (user)=>{
  dispatch(signupAC(user,navigate));
}

  return (
     <>
     <LoginSignup login={login} signup={signup}></LoginSignup>
     <Footer></Footer>
     </> 
  );
}

export default LoginSignupPage;