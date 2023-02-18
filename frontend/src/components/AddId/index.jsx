import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../forminput";
import style from "./index.module.css"

const inputs=[
    {
        name:"lockId",
        placeholder:"enter id you want to add",
        label :"Id",
        type:"text",
        id:"id1"
    },
    {
        name:"password",
        placeholder:"enter the password of the id",
        label :"Password",
        type:"text",
        id:"id2"
    }
]

const AddId=(props)=>{
    const navigate=useNavigate();
    const [values,setValues]=useState({
        lockId:"",
        password:""
    })
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }
    // console.log(values);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        // console.log(e);
        try{
            const fetchData=await fetch(`${process.env.REACT_APP_API}lock/add`,{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                    "Authorization":`Bearer ${props.userDetails.token}`
                },
                body:JSON.stringify(values)
            })
            // console.log(fetchData);
           
            const response=await fetchData.json();
            if(fetchData.ok==false){
                throw new Error(response.message);
            }
            // console.log(response);
            const newIds=props.ids.map((id)=>id);
            newIds.push(response);
            props.setIds(newIds);
            e.target.reset();
        }catch(err){
            // console.log(err);
            navigate("/error",{state:{message:err.message}});
        }
    }
    return (
        <form className={style.formadd} onSubmit={handleSubmit} >
         {
            inputs.map((input)=>{
                return <FormInput key={input.id} {...input} onChange={handleChange}/>
            })
        }
        <button>Add Id</button>
        </form>
    )
}
export default AddId;