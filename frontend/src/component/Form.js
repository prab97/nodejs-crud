import React, { useEffect, useState } from 'react'
import { useNavigate, createSearchParams, Link } from 'react-router-dom';
import Table from "./Table"
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();
  // const [data, setdata] = useState("")

  // useEffect(() => {
  //   const showData = async (e) => {
  //     const response = await axios.get("http://localhost:8000/records")
  //     setdata(response?.data[0])
  //   }
  //   showData()
  // }, [])

  // const datax = Object.values(data)
  // console.log("micro",datax)
  const updateHandler = () => {
    navigate("/update")
  }

  const handleclick = async () => {
    const response = await axios.get("http://localhost:8000/show");
    // console.log(response.data);
    const msg = response.data
    console.log(msg)
    navigate("/records", {state : {msg}})

    // navigate({
    //   pathname: "/show",
    //   search: createSearchParams({
    //     id: datax,
    //     name:datax[1],
    //     email:datax[4],
    //     phone:datax[2],
    //     gender:datax[3],  
    //   }).toString()
    // });
  }

  const deleteHandler =async (e) => {
          navigate("/deleterecord")
  }


  // console.log("data", data)
  const changeHandler = async (e) => {
    e.preventDefault(); //to avoid refresh every time submit is press; otherwise data will not be visible @ console.log().
    const payload = {
      "name": document.getElementById("fname").value,
      "phone": document.getElementById("contact").value,
      "gender": document.getElementById("Male").checked ? document.getElementById("Male").value : document.getElementById("Female").value,
      "email": document.getElementById("mail").value
    }

    try {
      const response = await axios.post("http://localhost:8000/submit", { ...payload })
      console.log(response.data)
      if(response.data.name){
        alert("Record Inserted Successfully!!")
      }else{
        alert("Email Already Registered!!")
      }

    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <form onSubmit={changeHandler}>
        <label htmlFor="fname">Enter Name:</label>
        <input type="text" id="fname" name="fname" /><br />

        <label htmlFor="contact">Phone No.</label>
        <input type="text" id="contact" name="contact" required /><br />

        <label htmlFor="gender">Gender</label><br />

        <label htmlFor="gender">Male</label>
        <input type="radio" id="Male" name="gender" value="male" />
        <label htmlFor="html">Female</label>
        <input type="radio" id="Female" name="gender" value="female" /><br />

        <label htmlFor="mail">Email</label>
        <input type="email" id="mail" name="email" required /><br />

        <button type="submit">Submit</button>


      </form>

      <button onClick={handleclick} >Show Data</button>
      <button onClick={updateHandler}>Update Record</button>
      <button onClick={deleteHandler}>Delete Record</button>

      {/* <label htmlFor="fname">Enter Name:</label>
        <input type="text" id="fname" name="fname" required /><br />

        <label htmlFor="contact">Phone No.</label> 
        <input type="text" id="contact" name="contact" required/><br />

        <label htmlFor="gender">Gender</label><br />

        <label htmlFor="gender">Male</label>
        <input type="radio" id="M" name="gender" value="male" />
        <label htmlFor="html">Female</label>
        <input type="radio" id="F" name="gender" value="female" /><br />

        <label htmlFor="mail">Email</label>
        <input type="email" id="mail" name="email" required/><br /> 


        <button  type= "submit">Submit</button> */}



    </>


  )
}

export default Form


// Authentication
// XSS
// CRUD operations
// Payment Integration 