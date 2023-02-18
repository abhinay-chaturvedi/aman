import Header from "../../components/Header"
import UserContent from "../../components/body"
import Popup from "../../components/popup";
import { useState } from "react";
const UserUI=(props)=>{
    const [popup,setPopup]=useState(false);
    const [data,setData]=useState({
        Id:"",
        password:""
    })
    return (
        <div>
            <Header setUserDetails={props.setUserDetails} userDetails={props.userDetails}/>
            <UserContent setUserDetails={props.setUserDetails} setData={setData} setPopup={setPopup} userDetails={props.userDetails}/>
            {popup && <Popup data={data} setPopup={setPopup}/>}
        </div>
    )
}
export default UserUI;