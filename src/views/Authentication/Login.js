import Input from "../../components/reuseables/Input";
import emailIcon from "../../assert/email.svg"
import passwordIcon from "../../assert/password.svg"
import {FaBeer} from 'react-icons/fa'
import "./authentication.css"
import {useState} from "react";
import {icons} from "react-icons";
import Register from "./Register";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

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
        // console.log(userInput)
        axios.get(`http://localhost:4000/tobDb/?email=${userInput["email"]}`)
            .then(( result) => {
                // console.log(data)
                result.data[0].password === userInput["password"] && navigate("./dashboard")
            })
            .catch((error) => console.log(error))


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

                <div className="gif">

                    <img src="https://media2.giphy.com/media/3o72EXMO3OZpcvFvzy/giphy.gif?cid=ecf05e474yyg4kh0bsixx0tmxx7ovk1zr8x44fnqs2svqp1x&rid=giphy.gif&ct=g" alt=""/>



                </div>
                <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=F7F7F7FF&width=435&lines=Welcome+to+norb+events" alt="Typing SVG" />

            </div>
        </div>
    )

}

export default Login