import "./reusables.css"
const Input = ({ text, handleChange, icon, label}) => {
    return(
        <div className="input-container">
            <div className="label-container">
                <label>{label}</label>
            </div>
            <input name={label} type={text} onChange={handleChange}/>
            {icon}
=            <img src={icon} alt="input-icon"/>
        </div>
    )

}
export default Input