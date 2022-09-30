import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "sk_test_51LnIf2SItKmNIyvdgd5q2mMpZVcHpHG22iWVfoHYs9hu0fcRULlbwqdlnuLSNlsbc6uZfZynRWCfKMouZuuYsUet00i6g39LBn"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
          <Route
            path="/Payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
