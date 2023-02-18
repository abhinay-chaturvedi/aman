import AdminBody from "../../components/adminBody";
import Header from "../../components/Header";

 const Admin=(props)=>{
    return (
        <div>
            <Header setUserDetails={props.setUserDetails} userDetails={props.userDetails}/>
            <AdminBody  userDetails={props.userDetails} />
        </div>
    )
}

export default Admin;