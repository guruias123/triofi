import react from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Emi1 from './components/Emi1';
import Signup from './components/Signup'
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Ui from './components/Ui'
import Main from './components/Main';
import Ui1 from './components/Ui1';

function Routing() {
  return (
    <BrowserRouter>

      <Route exact path='/' component={Ui} />
      <Route path='/main' component={Main} />
      {/* <Route exact path='/' component={Signup} /> */}
      <Route path='/login' component={Login} />
      {/* <Route path='/home' component={Emi1} /> */}
      <Route path="/signup" component={Ui1} />


    </BrowserRouter>
  );
}

export default Routing;
