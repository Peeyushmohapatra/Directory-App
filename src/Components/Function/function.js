export function handleDelete(uid,listArr,setListarr){
    setListarr(listArr.filter((ele) => {
      return ele.uid !== uid
    }));
  }

  export function updateLocal(listArr){
    localStorage.setItem("users",JSON.stringify([...listArr]));
  }