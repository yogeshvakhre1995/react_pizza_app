import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";


const About = lazy(() => import('./pages/About/About'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Checkout = lazy(() => import('./pages/Checkout/Checkout'))
const Disclaimer = lazy(() => import('./pages/Disclaimer/Disclaimer'))
const Error404 = lazy(() => import('./pages/404/Error404'))
const FAQ = lazy(() => import('./pages/FAQ/FAQ'))
const Home = lazy(() => import('./pages/Home/Home'))
const SignIn = lazy(() => import('./pages/SignIn/SignIn'))
const SignOut = lazy(() => import('./pages/SignOut/SignOut'))
const Menu = lazy(() => import('./pages/Menu/Menu'))
const Orders = lazy(() => import('./pages/Orders/Orders'))
const Privacy = lazy(() => import('./pages/Privacy/Privacy'))
const SignUp = lazy(() => import('./pages/SignUp/SignUp'))
const Terms = lazy(() => import('./pages/Terms/Terms'))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Layout>
            
                <Routes>
                  <Route path="/" exact element={<Home/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/cart"  element={<Cart/>} />
                  <Route path="/checkout" element={<Checkout/>} />
                  <Route path="/disclaimer"  element={<Disclaimer/>} />
                  <Route path="/faq" element={<FAQ/>} />
                  <Route path="/menu"  element={<Menu/>} />
                  <Route path="/orders" element={<Orders/>} />
                  <Route path="/privacy-policy" element={<Privacy/>} />
                  <Route path="/signup" element={<SignUp/>} />
                  <Route path="/terms-and-conditions" element={<Terms/>} />
                  <Route path="/signin" element={<SignIn/>} />
                  <Route path="/signout" element={<SignOut/>} />
                  <Route element={<Error404/>} />
                  
                </Routes>               
          </Layout>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
