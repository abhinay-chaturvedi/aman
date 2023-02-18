import { useEffect, useState } from "react"


const Clock=({time})=>{

    const [days,setDays]=useState(0);
    const [hours,setHours]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [second,setSeconds]=useState(0);
    const setTime=()=>{
        const diff=Date.now()-time;
       
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((diff / 1000 / 60) % 60));
    setSeconds(Math.floor((diff / 1000) % 60));
    }
    useEffect(()=>{
        // setTime()
        const interval=setInterval(()=>setTime());
        return ()=>clearInterval(interval)
    },[])
    return (
        <div className="clock">
            <span>{days}<b>:</b></span>
            <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{second}</span>
        </div>
    )
}
export default Clock