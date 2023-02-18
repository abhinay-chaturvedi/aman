
const TransactionWidget=({obj})=>{
    return(
       <ul className="historyList">
                <li className="historyListItem">
                  <p>  <b>email:</b>{obj.email}</p>
                </li>
                <li className="historyListItem">
               <p> <b>LockId:</b>{obj.lockId}</p>
                </li>
                <li className="historyListItem">
             <p>   <b>password:</b>{obj.password}</p>
                </li>
                <li className="historyListItem">
                <p><b>Date and Time:</b>{new Date(obj.createdAt).toLocaleString()}</p>
                </li>
            </ul>
    )
}
export default TransactionWidget;