

const IdContainer=(props)=>{
    return (
        <div className={props.class.div}>
     
        <p><b>Status</b>:Available</p>
        {/* <p>Available</p> */}
        <p>Price:-20 <b>coins</b></p>
        <button accessKey={props.password} id={props._id} onClick={props.onClick} className = {props.class.btn}> GetId and password</button>
      
    </div>
    )
}
export default IdContainer;