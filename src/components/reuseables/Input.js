import "./reusables.css"
const Input = ({ text, handleClick, icon, label}) => {
    return(
        <div className="input-container">
            <div className="label-container">
                <label>{label}</label>
            </div>
            <input type={text} onChange={handleClick}/>
            <img src={icon} alt="input-icon"/>
        </div>
    )

}
export default Input