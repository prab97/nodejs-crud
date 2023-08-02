import React, { useState } from 'react'
import { useSearchParams, useLocation, useNavigate} from 'react-router-dom';
import "./ap.css";


function Table() {
   const location = useLocation();
   const navigate = useNavigate();
//    console.log("ok tested")
   const {name, phone, gender, email } = location.state.msg;
//    console.log(location.state.msg)
//     const [searchparams] = useSearchParams();
//     console.log("useSearch",searchparams.get("id"))

// const t =Object.values(searchparams)
//     const [ data,setdata] = useState("")

  return (
    <div className="App">
    <table>
        <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Email</th>
        </tr>

        {
            location.state.msg.map((item) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                </tr>
            ))
        }
        
        {/* <tr>
            <td>{searchparams.get("name")}</td>
            <td>{searchparams.get("phone")}</td>
            <td>{searchparams.get("email")}</td>
            <td>{searchparams.get("gender")}</td>
        </tr> */}
      
    </table>

    <button onClick={(item) => navigate(-1)}>Go Back</button>
</div>
  )
}

export default Table
