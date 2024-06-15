import React, { useEffect, useState } from 'react'
import "./AddForm.css"
import styled from 'styled-components'

const AddForm = (setShowForm) => {
    const [formData, setFormData] = useState({
        name:"",
        address:"",
        number:"",
        altNumber:"",
        pincode:"",
        landmark:"",
    });
    const [address, setAddress] = useState({})
    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit =(e) =>{
        e.preventDefault()
        localStorage.setItem("sephoraAddress", JSON.stringify(formData));
        setShowForm(false)
    };
    useEffect(()=>{
        let add = JSON.parse(localStorage.getItem("sephoraAddress"))
        setAddress(add);
    },[])
  return (
    <div className="form_wrapper">
        <div className="addForm">
            <h2>Address</h2>
            <form onSubmit={handleSubmit} className="grid">
        <input required 
        type="text"
         name='name' 
         placeholder='Name'
          value={formData.name}
           onChange={handleChange} 
           className="a" />

        <input type="text"
        placeholder='Address'
        name='address'
        value={formData.address}
        onChange={handleChange}
        className="b" />

        <input type="number"
        required
        limit="10"
        name='number'
        placeholder='Phone Number'
        value={formData.number}
        onChange={handleChange}
        className="c" />

        <input type="number"
        required
        limit="10"
        name='altNumber'
        value={formData.altNumber}
        placeholder='Alternate Number'
        onChange={handleChange}
        className="d" />

        <input type="number"
        required
        limit="6"
        name='pincode'
        value={formData.pincode}
        onChange={handleChange}
        className="e" />

        <input type="text"
        required
        name='landmark'
        placeholder='Landmark'
        value={formData.landmark}
        onChange={handleChange}
        className="f" />

        <input type="submit" id='submit' className="g" />
        </form>
        </div>
    </div>
  )
}

export default AddForm
