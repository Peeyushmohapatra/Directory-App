import React, { useEffect, useState } from 'react'
import "./Userlist.css";
import { handleDelete, updateLocal } from '../Function/function';

const Userlist = ({listArr, setListarr}) => {
  const [state,setState] = useState("");
  const [toggle,setToggle] = useState(false);

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("users")))
    localStorage.setItem("users",JSON.stringify([...listArr]));
    
  },[listArr])

  return (
    <div className='tableList'>
        <table>
            {state && state.map((ele) => {
                return (
            <tr>
                <td><input className='input' value={ele.name} type="text" /></td>
                <td><input className='input' value={ele.dob} type="text" /></td>
                <td><input className='input' value={ele.uid} type="text" /></td>
                <td><input className='input' value={ele.mobileNumber} type="text" /></td>
                <td><input className='input' value={ele.age} type="text" /></td>
                <div><button>save</button> <button onClick={() => {
                  handleDelete(ele.uid,listArr,setListarr);
                  // updateLocal(listArr);
                  // localStorage.setItem("users",JSON.stringify([...listArr]));
                  window.location.reload();
                }}>delete</button></div>
            </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Userlist