import React from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Login from './Components/Login/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import OrderList from './Components/OrderList/OrderList';
import AddService from './Components/AddService/AddService';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageServices from './Components/ManageServices/ManageServices';
import ConfirmBooking from './Components/ConfirmBooking/ConfirmBooking';
import BookingList from './Components/BookingList/BookingList';
import Review from './Components/Review/Review';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/orderList">
          <OrderList></OrderList>
        </Route>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/manageServices">
          <ManageServices></ManageServices>
        </Route>
        <Route path="/confirmBooking">
          <ConfirmBooking></ConfirmBooking>
        </Route>
        <Route path="/bookingList">
          <BookingList></BookingList>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;