import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51LGFssSGW8zRUNJgmC2eAZfYO9UqybLKYvEJrIFwJ2JWLAGUsNnZqAbaBTlOvwVbn4Awh25cQOrusRh7gRY05SYX00JY1EagJp")

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(`The user is ${authUser}`);
      if(authUser) {
        // console.log('User is logged in');
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }  
      else {
        // console.log('User is logged out');
        dispatch({
          type: 'SET_USER',
          user: null  
        })
      }
    })
  },[])
  // if we put anything in array, then it will load when the state of that variable changes.
  // Otherwise, it runs just once when the component loads.
  return (
    <Router>
      <div className="app">
        <Routes>
          
          <Route path="/" element={<><Header /> <Home /></>} />
        </Routes>

        <Routes>
          <Route path="/checkout" element={<><Header /> <Checkout /></>} />
        </Routes>

        <Routes>
          <Route path="/login" element={<Login />} /> 
        </Routes>

        <Routes>
          <Route path="/payment" element={<> 
                                          <Header /> 
                                          {/* <Elements stripe={promise}/>  */}
                                          <Payment/> 
                                          </>} 
          />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
