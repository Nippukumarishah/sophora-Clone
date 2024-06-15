import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PricingTable from './PricingTable';
import "./PricingTable.css"
import AddForm from '../AddForm/AddForm';


const PaymentPage = () => {
  const [cart,setCart] = useState([]);
  const [cartTotal,setCartTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(false);
  const [show4,setShow4] = useState(false);
  const [lenght, setLength] = useState("");
  const [paymode, setPaymode] = useState("");
  const navigate =useNavigate();

  const handlePayment =(e) =>{
    e.preventDefault()
    setPaymode(e.target[0].value)
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);

  }
  const handlePod =() =>{
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setPaymode("PayOnDelivery");
  }
  useEffect(()=>{
    const cartItems =JSON.parse(localStorage.getItem("ishika")) || [];
    setCart(cartItems);
    let total = 0;
    const totalPrice = cartItems.reduce((sum,product) =>{
      const listPrice = product.currentSku.listPrice;
      const priceRange = listPrice.split('-').map(price => parseFloat(price.replace('$', '').trim()));
      const averagePrice = priceRange.reduce((acc,price) => acc + price,0) / priceRange.length;
      return sum + averagePrice;
    }, 0);
    setCartTotal(totalPrice);
  },[])

  useEffect(()=>{
    const add = JSON.parse(localStorage.getItem("sephoraAddress")) || [];
    if(add){
      setShowForm(false);
    }
    else{
      setShowForm(true);
    }
  },[])
  const pro = JSON.parse(localStorage.getItem("sephoraAddress")) || [];
  useEffect(()=>{
    setLength(pro)
  },[pro,length]);
  const handleAlert =()=>{
    const cartItems = JSON.parse(localStorage.getItem("ishika")) || []
    if(cartItems.length==0){
      alert("your cart is empty please add products in cart");
      navigate('/')
      return
    }
    if(payment==""){
      alert("Please Select payment mode")
      return
    }
    alert("Order Placed thank you for shopping from sephora");
    localStorage.removeItem("ishika")
    navigate('/')
    return
  };
  return (
    <>
    
    <div className="p_page_wrapper">
      <div className="p_det">
        <div>
          <span>
            <strong>TOTAL PAYABLE AMOUNT</strong>
          </span>
          <span>
            <strong>Rs. {Math.round((cartTotal * 86) /100)}</strong>
          </span>
        </div>
        <p>
          <strong>PAYMENT METHODS</strong>
        </p>
        <hr />
        <div className="payment_methods">
          <div>
            <label style={{marginLeft:"35px"}}>Credit/ Debit Card</label>{" "}
            <span onClick={() =>{
               setShow1(true);
               setShow2(false)
               setShow3(false);
               setShow4(false);
            }} className='hellohover' style={{color:"rgb(255,51,153)"}}>Click me </span>
              <div className={show1 ? "display" : "none"}>
                <form className="form" onSubmit={handlePayment}>
                  <input type="text" value={"Credit/Debit Card"} style={{display:"none"}} />
                  <input type="number" 
                  placeholder='Enter Card Number'
                  className="i" />
                  <input type="text" placeholder='Enter Name' required className="j" />
                  <input type="number" placeholder='Enter CVV' required className="k" />
                  <input type="month" placeholder='MM' required className="l" />
                  <input type="date" placeholder='YYYY' required className="m" />
                  <input type="submit" className="n" />

                </form>
              </div>
           
          </div>
        </div>
        <div>
        <label style={{marginLeft:"35px"}}>Net Banking</label>{" "}
        <span onClick={()=> {
          setShow1(false)
          setShow2(true)
          setShow3(false)
          setShow4(false)
        }} className='hellohover' style={{color:"rgb(255,51,153)"}}>
          Click me
        </span>
        <div className={show2 ? "display" : 'none'}>
          <form className="form" onSubmit={handlePayment}>
            <input type="text" value={"Net Banking"} style={{display:"none"}} />
            <input type="number" placeholder='Enter Card Number' className="i" />
            <input type="text" required placeholder='Enter Name' className="j" />
            <input type="number" required placeholder='Enter CVV' className="k" />
            <input type="month" required placeholder='MM' className="l" />
            <input type="date" placeholder='YYYY' className="m" />
            <input type="submit" className="n" />
          </form>
        </div>
      </div>
       <div>
   <label style={{marginLeft:"35px"}}>
    Pay on Delivery (UPI,Wallet,Card and cash) {" "} <span className='hellohover' onClick={()=> handlePod} style={{color:"rgb(255,51,153)"}}>Click me</span> <br />
    <span>(additional charges Rs.40)</span>
   </label>
   </div>
   </div>
   {paymode!=="" ? <p>Selected method: <span style={{color:"rgb(255,51,153)"}}>{paymode}</span> </p> : null}
   </div>
   <div className="price_det">
    <PricingTable total={cartTotal} />
    <div className="continue" onClick={handleAlert}>
      {cart.length === 0 ? <span>Go Shopping</span> : <span style={{color:"white"}}>PLACE ORDER</span> }
    </div>
   </div>
{pro.lenght==0 ? <AddForm setShowForm={setShowForm} /> : null}
   
    </>
  )
}

export default PaymentPage
