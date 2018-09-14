import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homePage';
import {CartPage} from './pages/cartPage';
import  {CheckoutPage}  from "./pages/checkoutPage";
import  LoginPage  from './pages/loginPage';
import RegistrationPage from "./pages/registrationPage";

const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/registration' component={RegistrationPage} />
    <Route exact path='/cart' component={CartPage} />
    <Route exact path='/checkout' component={CheckoutPage} />
  </Switch>
)

export default Router;