import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../forminput";
import style from "./index.module.css"

const inputs=[
    {
        name:"email",
        placeholder:"enter email of user",
        label :"Email",
        type:"email",
        id:"amount1"
    },
    {
        name:"amount",
        placeholder:"enter the amount you want to add",
        label :"Amount",
        type:"number",
        id:"amount2"
    }
]
const AddAmount=(props)=>{
    const navigate=useNavigate();
    const [values,setValues]=useState({
        email:"",
        amount:""
    })
    const handleChange=(e)=>{
        // console.log(e.target.name);
        setValues({...values,[e.target.name]:e.target.value});
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{

     const fetchData=await fetch(`${process.env.REACT_APP_API}user/add`,{
        method:"POST",
        headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${props.userDetails.token}`
        },
        body:JSON.stringify(values)
     })
     const response=await fetchData.json();
     if(fetchData.ok==false){
        throw new Error(response.message);
     }
    //  console.log(response);
    //  document.querySelector("FormInput").reset();
    e.target.reset();
        }catch(e){
            // console.log(e);
            navigate("/error",{state:{message:e.message}});
            
        }
      
    
    }
    // console.log(values);
    return (
        <form className={style.formadd} onSubmit={handleSubmit} >
        {
            inputs.map((input)=>{
                return <FormInput key={input.id} {...input} onChange={handleChange}/>
            })
        }
        <button>Add Amount</button>
        </form>
    )
}
export default AddAmount;