import { useNavigate } from "react-router-dom";
import style from "./index.module.css"

const Header=(props)=>{
    
const handleLogout=()=>{
    
    props.setUserDetails({user:null,token:null});
}
    const navigate=useNavigate();
    return (
    <div className={style.header}>
        <div class={style.headerContainer}>
            <div class={style.logoContainer}>
                <h1 onClick={()=>navigate("/")} class={style.logo}>Aman Guru Solution</h1>  
            </div>
          
            {props.userDetails.user.is_Admin &&
              <div className={style.adminbtncontainer}>
            <button onClick={()=>navigate("/admin")} className={style.adminbtn}>admin page</button>
            </div> }
            <div class={style.userContainer}>
                <h2 onClick={handleLogout} class={style.user}>LogOut</h2>
            </div>
        </div>
    </div>
    )
}
export default Header;