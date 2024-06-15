import React, { useState } from 'react'
import { useEffect } from 'react';
import PricingTable from './PricingTable';
import "./ShippingPage.css";
import "./PricingTable.css"


const ShippingPage = (setCurrState) => {
  
  const [cartTotal,setCartTotal] = useState(0);
  const [showAdd, setShowAdd] = useState(true);
  const [cart,setCart]= useState([]);
  const [address, setAddress] = useState({});

  const priceUpdate = ()=>{
    const cartItems = JSON.parse(localStorage.getItem("ishika")) || []
    setCart(cartItems)
    const totalPrice = cartItems.reduce((sum, product) => {
      const listPrice = product.currentSku.listPrice;
      const priceRange = listPrice.split('-').map(price => parseFloat(price.replace('$', '').trim()));
      const averagePrice = priceRange.reduce((acc,price) => acc + price, 0) / priceRange.length;
      return sum + averagePrice;
    },0);
    setCartTotal(totalPrice)
  }
  useEffect(()=>{
    priceUpdate();
  },[]);

  const handleRemove = (_id)=>{
    const remainingItems = cart.filter((item) => item.productId !==_id)
    setCart(remainingItems) 
    localStorage.setItem("ishika",JSON.stringify(remainingItems))
    priceUpdate()
  }
  useEffect(()=>{
    let add = JSON.parse(localStorage.getItem("sephoraAddress")) || []
    if(add){
      setAddress(add);
      setShowAdd(true)

    }
    else{
      setShowAdd(false);
    }
  },[])
  return (
   <div className="s_page_wrapper">
    <div className="s_det">
      <div className="s_shipping_address">
        <div><span>Shipping Options</span><span style={{color:"rgb(255,51,153", textDecoration: "underline"}}>{}</span></div>
        <div>Deliver Address</div>
        {showAdd?
        <>
        <div>Name:<span>{address.name}</span></div>
        <div>Address:<span>{address.address}</span></div>
        <div>PinCode:<span>{address.pincode}</span></div>
        <div>Mobile Number:<span>{address.number}</span></div>
        
        </> : null
        }
      </div>
      {cart.map((ele,i)=>(
        <div key={i} className="product_det">
          <img src={ele.altImage || ele.heroImage} alt="product Img" className="image" />
          <div>
            <ul style={{listStyle:"none"}}>
              <li>{ele.brandName}</li>
              <li><strong>{ele.displayName}</strong></li>
              <li><span>{ele.available}</span></li>
              <li><strong>{ele.currentSku.listPrice}</strong></li>
            </ul>
            <button
            onClick={()=>handleRemove(ele.productId)} id="removebutton"
            >Remove</button>
          </div>
        </div>
      ))}
      {cart.length === 0 ? <div style={{fontSize: 'large'}}>Your cart is empty!</div> : '' }
    </div>
    <div className="price_det">
      <div className="promo_code">
        <img src="https://static.nnnow.com/client/assets/images/promotions/icon_promo.png" alt="" />
        <span>APPLY PROMO CODE</span>
      </div>
      <PricingTable total={cartTotal} />
      <div className="continue" onClick={() => setCurrState}><span>CONTINUE</span></div>
    </div>
    
   </div>
   
  )
}

export default ShippingPage
