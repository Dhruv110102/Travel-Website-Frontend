import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Site from './components/pages/Site';
import booking from './components/pages/booking';
import About from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import bookingsucessful from './components/pages/bookingsucessful';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/services' component={Services}/>
      <Route path='/products' component={Products}/>
      <Route path='/sign-up' component={SignUp}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/site' component={Site}/>
      <Route path='/booking' component={booking}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contactus}/>
      <Route path='/booked' component={bookingsucessful}/>
    </Switch>
    </Router>
    

    
    
    
  );
}

export default App;
