


const FormInput=(props)=>{
    const {label,id,onChange,...rest}=props;
    return (
        <div className="formInput">
        <label> {label}</label>
        <input 
        {...rest}
        required
         onChange={onChange}
          />
  
        </div>
    )
}
export default FormInput;