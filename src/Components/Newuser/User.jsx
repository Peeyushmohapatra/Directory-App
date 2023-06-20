import React, { useState } from 'react'
import "./User.css"
import Userlist from '../Userlist/Userlist';

const User = () => {
    const [inputData,setInputdata] = useState({
        name:"",
        dob:"",
        uid:"",
        mobileNumber:"",
        age:""
    });
    const [listArr, setListarr] = useState([]);

    function handleUser(id){
        if(inputData.name === "" || inputData.uid === "" || inputData.dob === "" || inputData.mobileNumber === "" || inputData.age === ""){
            alert("All Field are Required !!!");
            return 
        }
        localStorage.setItem("users",JSON.stringify([...listArr,inputData]))
        setListarr([...listArr,inputData]);
        setInputdata({
            name:"",
            dob:"",
            uid:"",
            mobileNumber:"",
            age:""
        });
    }

  return (
    <div className='tableContainer'>
        <div className='pageHeading'>
            <div className="innerPageheading"><h4>Add New Person</h4></div>
        </div>
        <table className='table'>
            <tr>
                <th className='th'>Name</th>
                <th className='th'>Date Of Birth</th>
                <th className='th'>Aadhar Number</th>
                <th className='th'>Contact Number</th>
                <th className='th'>Age</th>
            </tr>
            <tr>
                <td><input className='input' value={inputData.name} onChange={(e) => {
                    setInputdata({...inputData,name:e.target.value})
                }} type="text" /></td>

                <td><input className='input' value={inputData.dob} onChange={(e) => {
                    setInputdata({...inputData,dob:e.target.value})
                }}  type="text" /></td>

                <td><input className='input' value={inputData.uid} onChange={(e) => {
                    setInputdata({...inputData,uid:e.target.value})
                }}  type="number" /></td>

                <td><input className='input' value={inputData.mobileNumber} onChange={(e) => {
                    setInputdata({...inputData,mobileNumber:e.target.value,age:2023 - (inputData.dob.slice(inputData.dob.length-4))})
                }}  type="number" /></td>

                <td><input className='input' value={inputData.age} type="number" /></td>
                
            </tr>
        </table>
      <Userlist listArr={listArr} setListarr={setListarr}/>
      <button className='addButton' onClick={() => {
                    handleUser(inputData.uid);
                }}>Add</button>
    </div>
  )
}

export default User