import { useLocation } from "react-router-dom";

const Error=()=>{
    const {state}=useLocation();
    // console.log(state);
    return (
        <div>
        <h1>{state.message}</h1>
    </div>
    )
}
export default Error;