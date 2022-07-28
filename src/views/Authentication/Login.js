import Input from "../../components/reuseables/Input";
import emailIcon from "../../assert/email.svg"
import passwordIcon from "../../assert/password.svg"
import {FaBeer} from 'react-icons/fa'
import "./authentication.css"
import {useState} from "react";
import {icons} from "react-icons";
import Register from "./Register";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate()

    const [userInput, setUserInput] = useState({})
    const [fieldError, setFieldError] = useState(
        {
            email: {message: "", error: false},
            password: {message: "", error: false}
        }
    )

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
        checkIfFieldIsEmpty(e)

    }

    const handleClick = () => {
        console.log(userInput)


    }
    const checkIfFieldIsEmpty = (e) => {
        switch (e.target.name) {
            case "email":
                if (e.target.value === "") {
                    setFieldError(
                        {
                            ...fieldError,
                            [e.target.name]:
                                {
                                    message: "please enter a valid email",
                                    error: true
                                }
                        })
                } else {
                    setFieldError(
                        {
                            ...fieldError,
                            [e.target.name]:
                                {
                                    message: "please enter a valid email",
                                    error: false
                                }
                        })

                }
                break;
            case "password":
                if (e.target.value === '') {
                    setFieldError(
                        {
                            ...fieldError,
                            [e.target.name]:
                                {
                                    message: "please enter a valid password",
                                    error: true
                                }
                        })
                } else {
                    setFieldError(
                        {
                            ...fieldError,
                            [e.target.name]:
                                {
                                    message: "please enter a valid password",
                                    error: false
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
        <div className="authenticationContainer">
            <div className="leftSide">
                <div className="leftSide-container">

                    <a onClick={() => navigate("/Register")}>
                        Have an account?
                        <span style={{
                            color: 'var(--primary_green)',
                            marginLeft: '4px'
                        }}>
                    Sign Up
                            {/*<div className="link-register-login" >*/}
                            {/*<a href="./Register"> SignUp </a>*/}
                            {/*</div>*/}
                            {/*<Link to="./" >SignUp</Link>*/}
                </span>
                    </a>
                    <div className="welcome-text">
                        <h1>Welcome To Norbs</h1>
                        <p>We are an event management platform,
                            aimed at helping you facilitate a smooth event </p>
                    </div>
                    <div className="inp">
                        <Input text="email" handleChange={handleChange} icon={emailIcon} label="email"
                               fieldError={fieldError}/>

                        <Input text="password" handleChange={handleChange} icon={passwordIcon} label="password"
                               fieldError={fieldError}/>
                        {/*<Icon defaultColor="lightgrey" />*/}
                        <button className="authentication-button" onClick={handleClick}>Get Into Norbs</button>
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