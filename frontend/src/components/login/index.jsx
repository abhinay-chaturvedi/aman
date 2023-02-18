import { useState } from "react";
import FormInput from "../forminput";
import {useLocation, useNavigate} from "react-router-dom"
const inputs=[
   
    {
        id:1,
        type:"email",
        placeholder:"Enter your email",
        label:"Email",
        name:"email"
    },
    {
        id:2,
        type:"password",
        placeholder:"Enter your password",
        label:"Password",
        name:"password"
    }
]

const Login=(props)=>{
    // console.log(process.env.REACT_APP_API);

    const state=useLocation();
const [values,setValues]=useState({
    email:"",
    password:""
})
const navigate=useNavigate();
    const onChange=(e)=>{
       
        setValues({...values,[e.target.name]:e.target.value})
    }
    // console.log(values);
    const handleToggle=()=>{
        props.setLogin(false);
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
      
        try{
        const fetchData= await fetch(`${process.env.REACT_APP_API}login`,
  {
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(values)
  })
//   console.log(fetchData);
//   useEffect(fetchData,[]);
// console.log(fetchData);
const response=await fetchData.json();
// console.log(response);
if(!response.user)throw new Error(response.message);
props.setUserDetails({user:response.user,token:response.token});
sessionStorage.setItem("user",JSON.stringify(response.user));
sessionStorage.setItem("token",response.token);
navigate('/');
        }catch(e){
            // console.log(e.message);
            
            // console.log(state);
            navigate('/error',{state:{message:e.message}});
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
           <h3 onClick={handleToggle}  style={{cursor:"pointer"}}>Not registered?click me!</h3>

            </form>
        </div>
    )
}
export default Login;