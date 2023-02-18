import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddAmount from "../AddAmount";
import AddId from "../AddId";
import AdminIdContainer from "../adminIdContainer";
import UpdatePassword from "../updatePassword";
import style from "./index.module.css"




const AdminBody=(props)=>{
   const [ids,setIds]=useState([]);
   const [idObject,setIdObject]=useState(null);
   const navigate=useNavigate();
    const handleClick=(e)=>{
        // console.log(e);
        const id=e.target.id;
        const password=e.target.accessKey;
        // console.log(id,password);
        // console.log("change password clicked");
        setIdObject({...idObject,
            _id:id,
            password:password
        })
        console.log(`${idObject} is `)
    }
    // console.log(idObject)
   const getIds=async ()=>{
    try{
        const fetchData =await fetch(`${process.env.REACT_APP_API}lock`,{
            method:"GET",
            headers:{
                "content-type":"apllication/json",
                "Authorization":`Bearer ${props.userDetails.token}`
            }
        })
        const response=await fetchData.json();
        // console.log(response);
        setIds(response);
    }catch(e){
        // console.log(e);
        navigate("/error");
    }
   }
//    getIds();
useEffect(()=>{
    getIds();
},[]);
    return (
        <div className={style.section}>
        <div className={style.leftSection}>
            <h2>Available Ids</h2>
            <div className={style.availableIds}>
            {
                ids.map((id)=>{
                    return <AdminIdContainer time={id.time} key={id._id} btnpassword={id.password} btnId={id._id} lockId={id.lockId} is_Available={id.is_Available} onClick={handleClick} btn={style.btnPur} div={style.ids}/>
                })
            }
            </div>
        </div>
        <div className={style.rightSection}>
            <h2>Add Id And Coins Section </h2>
            <div className={style.addId}>
                <h2>Add New Id </h2>
              <AddId ids={ids} setIds={setIds} userDetails={props.userDetails}/>
            </div>
            <div className={style.addId}>
                <h2>Add Coins To User Account </h2>
              
              <AddAmount userDetails={props.userDetails}/>
            </div>
        </div>
        { idObject && <UpdatePassword setIdObject={setIdObject} ids={ids} setIds={setIds} idObject={idObject} userDetails={props.userDetails}/>}
        
    </div>
    )
}
export default AdminBody;