import React, { useState } from 'react'
import HeadBar from '../head/HeadBar';
import { Button } from './Button';
import styled from 'styled-components';
import "./CheckoutPage.css"
import ShippingPage from '../ShippingPayment/ShippingPage';
import PaymentPage from '../ShippingPayment/PaymentPage';




const CheckoutPage = () => {
  const [currState, setCurrState] = useState("shipping");
  return (
    <div>
     
      <HeadBar />
      <div className="check_bar">
        <div className="wrapper">
          <div className="co"><strong>CHECKOUT</strong></div>
          <div className="opt">
            <div className={currState==="shipping"?"show" : "hide"} onClick={()=>(setCurrState("shipping"))}><Button><div id="circle123">1</div><span>Shipping</span></Button></div>
            <div className={currState==="shipping"?"show" : "hide"} onClick={()=>(setCurrState("shipping"))}><Button><div id="circle123">2</div><span>Payment</span></Button></div>
          </div>
        </div>
        {currState === "shipping" ? <ShippingPage setCurrState={setCurrState} /> : <PaymentPage />}
      </div>
    
    </div>
  )
}

export default CheckoutPage
