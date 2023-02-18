
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionWidget from "../TransactionWidget";
import "./index.css"

const Transaction=(props)=>{
    const [history,setHistory]=useState([]);
    const navigate=useNavigate();
    const getHistory=async ()=>{
        try{
            if(props.userDetails.user.is_Admin){
                const fetchData =await fetch(`${process.env.REACT_APP_API}user/getall`,{
                    method:"GET",
                    headers:{
                        "content-type":"application/json",
                        "Authorization":`Bearer ${props.userDetails.token}`
                    },
                })
                const response=await fetchData.json();
                // console.log(response);
                // console.log("runs admin history")
                if(fetchData.ok==false)navigate("/error",{state:{message:response.message}})
                setHistory(response);
            }else{
                const fetchData =await fetch(`${process.env.REACT_APP_API}user/history`,{
                    method:"GET",
                    headers:{
                        "content-type":"application/json",
                        "Authorization":`Bearer ${props.userDetails.token}`
                    },
                })
                // console.log(fetchData);
                const response=await fetchData.json();
                // console.log(response);
                if(fetchData.ok==false)navigate("/error",{state:{message:response.message}})
              
                setHistory(response);
            }
        }catch(e){
            navigate("/error",{state:{message:e.message}});
        }
    }
    // getHistory()
    useEffect(()=>{
        getHistory();
    },[]);
    return (
        <div className="historyContainer">
            <div className="historyList">
               <h2>Transaction History</h2>
            </div>
            {
                history && history.map((obj)=>{
                    return <TransactionWidget key={obj._id} obj={obj}/>
                })
            }
        </div>
    )
}
export default Transaction;