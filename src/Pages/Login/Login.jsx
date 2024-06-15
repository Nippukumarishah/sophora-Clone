import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
const Login = () => {
  const [user, setUser] = useState("");
  const [form123, setForm123] = useState("");
  const [emailer, setEmailer] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()


function handleChange(e){
  localStorage.setItem("user", JSON.stringify(e.target.value));

};

  function handleSubmit(e){
    if(emailer == "" || password == ""){
      alert("please fill required details")
      return
    }  
    const users = JSON.parse(localStorage.getItem("allusers")) || []
    const user = users?.find((ele) => {
      if(ele.Email==emailer || ele.Num === emailer && ele.Password === password){
        return ele
      }
    })
    if(user){
      alert("your otp is 234512")
      localStorage.setItem("emailVerify", JSON.stringify(emailer));
      navigate("/otp")
    }
    else{
      alert("Wrong email id / mobile no or password")
    }
  };

  const signUp = () => {
    navigate("/signUp")
  }
  return (
   <div className="forapper">
    <div className="adorm">
    <p style={{border:"0px", marginTop:"30px",padding:"5px", color:"rgb(255,52,153)",textAlign:"left"}}><Link to={`/`}>Back to Home</Link></p>
    <p className="trncs">LOGIN</p>
    <br />
    <p className="trncs">Enter your Phone / Email</p>
    <form onSubmit={handleSubmit} >
      <br />
      <input type="email"
      name='email'
      id='input'
      value={emailer}
      placeholder='Email or Phone Number'
      required
      onInput={(e)=>setEmailer(e.target.value)}
      />
      <br />
      <input type="password"
      name='password'
      value={password}
      id='input'
      placeholder='Enter Password'
      required
      onInput={(e) => setPassword(e.target.value)}
      style={{marginTop:"5px"}} />

      <br />
      
      <div style={{
        display:'flex',
        textAlign:'center',
        justifyContent:'space-around',
        marginTop:'10px'
      }}>
        <button style={{
          backgroundColor: "rgb(255,51,153)",
          border: "none",
          width: "40%",
          padding: "6px",
          borderRadius:"10px",
        }}
        color="primary"
            variant="contained"
            value="Submit"
            onClick={()=>{handleSubmit()}}
        >{" "}
        Continue{" "}
        </button>
        <button style={{
          backgroundColor: "rgb(255,51,153)",
          border: "none",
          width: "40%",
          padding: "6px",
          borderRadius:"10px",
        }}
        color='primary'
        variant="contained"
        value="Submit"
        onClick={()=>{signUp()}}
        >{" "}
          signUp{" "}
        </button>
      </div>

    </form>
    <p style={{marginLeft:"10px"}}>By proceeding, you agree to Privacy Policy, <span style={{ color: "rgb(255,51,153)" }} >Terms & Conditions</span></p>
    </div>
   </div>
  )
}

export default Login
