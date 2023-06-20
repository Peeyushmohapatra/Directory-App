import React, { useEffect, useState } from 'react'
import "./Information.css"

const Information = () => {
    // console.log(JSON.parse(localStorage.getItem("user")));
    const [input,setInput] = useState("");
    const [data,setData] = useState("")
    
    function getData(){
        const local = JSON.parse(localStorage.getItem("users"));
        // console.log(local);
        setData(local.filter((ele) => {
            return ele.uid === input
            // console.log(ele);
        }))
    }
  return (
    <div className='container'>
        <div className="informationContainer">
            <div className="innerInformationcontainer"><h4>Retrieve Information</h4></div>
        </div>
       <div className='formContainer'>
       <input className='uidInput' value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        <button className='findButton' onClick={() => {
            getData()
        }}>Find</button>
       </div>

        <div className="contentContainer">
        {data.length !== 0 ? data.map((ele) => {
            return (
                <div className='useData'>
                    <li>Name: {ele.name}</li>
                    <li>Aadhar Number: {ele.uid}</li>
                    <li>Mobile-Number: {ele.mobileNumber}</li>
                    <li>Age: {ele.age}</li>
                    <li>DOB: {ele.dob}</li>
                </div>
            )
        }) : <h1>No Data Found</h1>}
        </div>
    </div>
  )
}

export default Information