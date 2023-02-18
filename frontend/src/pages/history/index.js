import Header from "../../components/Header";
import Transaction from "../../components/Transaction";


const History=(props)=>{
    return (
        <div>
            <Header setUserDetails={props.setUserDetails} userDetails={props.userDetails}/>
            <Transaction  userDetails={props.userDetails}/>
        </div>
    )
}
export default History;