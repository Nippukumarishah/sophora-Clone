import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Otp.css"

const Opt = () => {
  const [user, setUser] = useState([])
  const [otp,setOtp] = useState("");
  const navigate= useNavigate();

  function handleFormer(){
    if(otp == 234512){
      let chaker = JSON.parse(localStorage.getItem("emailVerify"));
      let userList = JSON.parse(localStorage.getItem("allUsers")) || [];
      for(let i = 0; i<userList.length; i++){
        if(chaker==userList[i].Email || chakar == userList[i].Num){
          localStorage.setItem("user", JSON.stringify(userList[i].Name));
          alert(`Welcome Back ${userList[i].Name}`)
          navigate('/')
          return
        }
      }
    }
    alert("wrong otp please try again")
  }
  return (
    <>
      <div className="forapper2">
        <div className="adorm2">
          <p></p>
          <p className='trncs0'>OTP</p>
          <br />
          <p className="trncs0">Enter Received Otp</p>
          <form>
            <br />
            <input type="email"
            name='email'
            placeholder='Enter Otp' 
            required
            id='input'
            onInput={(e) => setOtp(e.target.value)}/>
            <br /><br /><br />
            <button 
            onClick={()=> handleFormer()}
            style={{backgroundColor:"rgb(255,51,153",
              border:"none",
              width:"90%"
            }}
            color='primary'
            variant="contained"
            value="Submit"
            >
               {" "}
               Continue{" "}

            </button>
          </form>
          <p></p>
          <p style={{color:"rgb(255,51,153)"}}><Link to={`/login`}>Back to Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default Opt
