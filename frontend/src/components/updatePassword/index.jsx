import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.css"

const UpdatePassword=(props)=>{
    const [values,setValues]=useState({
        newPassword:""
    })
    const navigate=useNavigate();
    // const[disable,setDisable]=useState(true);
    const [message,setMessage]=useState("");
    const handleNewPassword=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
       
    }
    // console.log(values);
    // const handleOldPassword=(e)=>{
    //     const t=props.idObject.password.slice(0,e.target.value.length);
    //     // console.log(t);
    //     if(t!=e.target.value)setMessage("password does not match");
    //     else setMessage("");
    //     if(e.target.value!=props.idObject.password)setDisable(true);
    //     setValues({...values,[e.target.name]:e.target.value});
    // }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const fetchData =await fetch(`${process.env.REACT_APP_API}lock/update`,{

            method:"PUT",
            headers:{
                "content-type":"application/json",
                "Authorization":`Bearer ${props.userDetails.token}`
            },
            body:JSON.stringify({
                id:props.idObject._id,
                newPassword:values.newPassword
            })
            })
            const response=await fetchData.json();
            // console.log(response);
            if(fetchData.ok==false)navigate("/error",{state:{message:response.message}})
            const res=props.ids.map((id)=>{
                if(id._id===props.idObject._id)return response;
                else return id;
            })
            props.setIds(res);
            props.setIdObject(null);
            // console.log(res);
            e.target.reset();
        }catch(err){
            console.log(err);
            navigate("/error",{state:{message:e.message}})

        }

    }
    const handleOnClose=()=>{
        // console.log("onclose clicked");
        
        props.setIdObject(null);
    }
    return (
        <div    className={style.popupcontainer}>
            <div className={style.formcontainer}>
                
        <form className={style.form}  onSubmit={handleSubmit}>
        {/* hello from update password side! */}
       
        <div>
            <label >New Password</label>
            <input onChange={handleNewPassword} name="newPassword" type="text" placeholder="enter new password" />
        </div>
        <p>{message}</p>
        <button > confirm change</button>
        </form>
        <div onClick={handleOnClose} className={style.cross}><i class="fa fa-close"></i></div>
       
            </div>
    </div>
    )
}
export default UpdatePassword;