import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/Login/SignUp'
import ProductDetails from '../Components/Product-details-Page/ProductDetails'

import CheckoutPage from '../Components/CheckOutPage/CheckoutPage'
import Opt from '../Pages/Login/Opt'
import PaymentPage from '../Components/ShippingPayment/PaymentPage'
import { MackupProduct } from '../Pages/Product-page/MakeUpProduct'
import HairProduct from '../Pages/Product-page/HairProduct'




const AllRoutes = () => {
  return (
    
    <div className="app">
      
        <Routes>
            <Route path='/' element={
            
              <Home />
          
          }/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signUp' element={<SignUp />}/>
            <Route path='/productDetails' element={<ProductDetails />}/>
            <Route path='/makeUpProduct' element={<MackupProduct />}/>
            <Route path='/hairProduct' element={<HairProduct />}/>
            <Route path='/checkoutPage' element={<CheckoutPage />} />
            <Route path='/otp' element={<Opt />} />
            <Route path='/payment' element={<PaymentPage />} />
        </Routes>
    </div>
  )
}

export default AllRoutes
