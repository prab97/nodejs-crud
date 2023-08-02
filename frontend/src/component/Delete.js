import React from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Delete() {
    const navigate = useNavigate();
    const submitHandler =  async (e) => {
        e.preventDefault();
        const answer = window.confirm("Do you want to Delete this record??")
        const email = document.getElementById("mail").value
        const data = {
            email,
        }
        if(answer){
                const response = await axios.post("http://localhost:8000/delete", {...data});
                // console.log(response.data)
                response.data.deletedCount !== 0 ? alert("Record Deleted Successfully") : alert("Record Not Found")

        }
       
    }
  return (
    <div>
        <h2>Delete Record Page</h2>
        <form onSubmit={submitHandler}>
                <label htmlFor="mail">Email</label>
                <input type="email" id="mail" name="email" required /><br />

                <button type="submit">Delete Record</button>
        </form>

        <button onClick={(item) => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Delete
