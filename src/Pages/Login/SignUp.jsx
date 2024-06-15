import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
const SignUp = () => {
  const [form, setForm] = useState({
    Name:"",
    Email:"",
    Password:"",
    Num:"",
  });

  const navigate=useNavigate();
  function handleChange(e){
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify(form.Name));

    let userList = JSON.parse(localStorage.getItem("allUsers")) || [];
    for(let i = 0;i<userList.length; i++){
      if(form.Email==userList[i].Email && form.Num==userList[i].Num){
        alert(`Email and mobile number already exist`)
      return
      }
      else if(form.Email==userList[i].Email){
        alert(`Email already exist`)
        return

      }
      else if(form.Num==userList[i].Num){
        alert(`mobile number already exist`)
        return
      }
    }
    userList.push(form);
    localStorage.setItem( "allUsers", JSON.stringify(userList));
    alert("signUp successfull")
    navigate("/")
  }
  return (
    <>
     <div className="forappel1">
      <div className="adorm1">
        <p></p>
        <p className="trncs2">CREATE <br />ACCOUNT</p>
        <br />
        <form onSubmit={handleSubmit}>
          <span className="trncs1">
            Name
          </span>
          <br />
          <input type="name" 
          name='Name'
          placeholder='Enter Name'
          onInput={handleChange}
          required
          id="input" />
          <br />
          <span className="trncs1">Email</span>
          <br />
          <input type="email" 
          name='Email'
          placeholder='Enter Email'
          id='input'
          required
          onInput={handleChange}
          />
          <br />
          <span className="trncs1">Password</span>
          <br />
          <input type="password" id="input"
          name='Password'
          placeholder='Enter Password'
          required
          onInput={handleChange}
          />
          <br />
          <span className="trncs1">Phone Number</span>
          <input type="number" id="input" 
          placeholder='Phone Number'
          required
          onInput={handleChange}
          />
          <br />
          <br /><br />
          <input type="submit"
          style={{backgroundColor:"rgb(255,51,153",
            border:"none",
            width:"30%",
            color:"white",
            borderRadius:"10px",
          }}
          />
        </form>
        <p></p>
        <p style={{color:"rgb(255,51,153)"}}><Link to={`/login`}>Back to Login</Link></p>
        </div>
     </div>
    </>
  )
}

export default SignUp
