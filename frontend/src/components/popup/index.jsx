import style from  "./index.module.css"
const Popup=(props)=>{
    return (
        <div className={style.popupcontainer}>
            <div className={style.popup}>
            
                <h2>Id Is: {props.data.Id}</h2>
                <h2>Password Is: {props.data.password}</h2>
                <button className={style.btn} onClick={()=>props.setPopup(false)}>ok</button>
            </div>
        </div>
    )
}
export default Popup;