import React from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"

function Update() {
  const navigate = useNavigate();
    const submitHandler = async (e) => {
    e.preventDefault();

    const data ={
          "name": document.getElementById("fname").value,
      "phone": document.getElementById("contact").value,
      "gender": document.getElementById("Male").checked ? document.getElementById("Male").value : document.getElementById("Female").value,
      "email": document.getElementById("mail").value
        }

    const response =  await axios.post("http://localhost:8000/update", {...data});
    response.data.matchedCount !== 0 ? alert("Database Updated Successfully") : alert("Record Not Found. Enter Registered Email Only.")
       
       
    }
  return (
    <div> 
        <h3>Update Page:</h3> 

        <form onSubmit={submitHandler}>
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

        <button type="submit">Update Record</button>


      </form>

      <button onClick={(item) => navigate(-1)}>Go Back</button>
        
    </div>
  )
}

export default Update
