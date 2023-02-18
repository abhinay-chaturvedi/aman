import { useState } from "react";
import FormInput from "../forminput";
import "./index.css"
const inputs=[
    {
        id:1,
        type:"text",
        placeholder:"Enter your first name",
        label:"First Name",
        name:"firstName"
    },
    {
        id:2,
        type:"text",
        placeholder:"Enter your last name",
        label:"Last Name",
        name:"lastName"
    },
    {
        id:3,
        type:"email",
        placeholder:"Enter your email",
        label:"Email",
        name:"email"
    },
    {
        id:4,
        type:"password",
        placeholder:"Enter your password",
        label:"Password",
        name:"password"
    }
]

const Register=(props)=>{
const [values,setValues]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
})
    const onChange=(e)=>{
       
        setValues({...values,[e.target.name]:e.target.value})
    }
    // console.log(values);
    const handleToggle=()=>{
        props.setLogin(true);
        // console.log("clicked")
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        // console.log("submit clicked");
try{
    // console.log(values);
    const fetchData=await fetch(`${process.env.REACT_APP_API}register`,
    {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(values),
    })
    const response=await fetchData.json();
    // console.log(response);
    props.setLogin(true);
}catch(e){
    // console.log(e);
}

    }
    return (
        <div className="registerback">
            <form onSubmit={handleSubmit}>
                {
                    inputs.map((input)=>{
                        return <FormInput key={input.id} {...input} onChange={onChange} />
                     })
                }
                <button>Submit</button>
           <h3 onClick={handleToggle}  style={{cursor:"pointer"}}>Already registered?click me!</h3>

            </form>
        </div>
    )
}
export default Register;