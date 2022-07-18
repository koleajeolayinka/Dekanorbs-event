import Input from "../../components/reuseables/Input";
import emailIcon from "../../assert/email.svg"
import passwordIcon from "../../assert/password.svg"
import "./login.css"
import { useState } from "react";

const Login = () => {
    const [userInput, setUserInput] = useState({})
    const [fieldError, setFieldError] = useState(
        {email: {message: "", error: false}}
        )

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})

    }

const handleClick = () => {
    console.log(userInput)


    }
    const checkIfFieldIsEmpty = (e) => {
        switch(e.target.name) {
            case "email":
                if(e.target.value === ""){
                    setFieldError(
                        {...fieldError, 
                            [e.target.name] : 
                            {
                                message: "please enter a valid email",
                        error: true
                    }
                })
                }
                break;
            case "password": 
            if(e.target.value === ""){
                setFieldError(
                    {...fieldError, 
                        [e.target.name] : 
                        {message: "please enter a valid password",
                    error: true
                }
            })
            }
            break

                default: 
                break;
        }

        if (e.target.value === '') return true
    }
    const checkIfItIsEmail = () => {
        
    }
     return (
        <div className="loginContainer">
            <div className="leftSide">
                <div className="leftSide-container">

                <a>
                    Have an account?
                    <span style={{
                        color: 'var(--primary_green)',
                        marginLeft: '4px'
                    }}>
                    Sign Up
                </span>
                </a>
                    <div className="welcome-text">
                        <h1>Welcome To Norbs</h1>
                        <p>We are an event management platform,
                            aimed at helping you facilitate a smooth event</p>
                    </div>
                    <div className="input-button-fields">
                        <Input text="email" handleChange={handleChange} icon={emailIcon} label="email"/>
                        <p className={fieldError.email.error ? "fieldError" : "noFieldError"}>
                            {fieldError.email.message}
                        </p>
                        <Input text="password" handleChange={handleChange} icon={passwordIcon} label="password"/>
                        <p className={fieldError.password.error ? "fieldError" : "noFieldError"}>
                            {fieldError.password.message}
                        </p>
                        <button onClick={handleClick}>Create An Account</button>
                    </div>
                    <div className="social-media">
                        <a>
                            <div className="social-media-icon">
                                
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rightSide">

            </div>
        </div>
    )

}

export default Login