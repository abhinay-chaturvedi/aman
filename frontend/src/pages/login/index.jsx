import { useState } from "react";
import Login from "../../components/login";
import Register from "../../components/register";


const LoginUser=(props)=>{
    const [login ,setLogin]=useState(false);
    return (
        <div>
                        {
            login? (<Login setLogin={setLogin} setUserDetails={props.setUserDetails} />): (<Register setLogin={setLogin}/>)
           }
        </div>
    )
}
export default LoginUser;