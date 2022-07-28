import Input from "../../components/reuseables/Input";
import emailIcon from "../../assert/email.svg"
import passwordIcon  from "../../assert/password.svg"
import user from "../../assert/user.svg"
import phoneNumber from "../../assert/phone.svg"
import "./authentication.css"
import {useState  } from "react";
import StepContainer from "../../components/authentication/register/StepContainer";
import {useNavigate} from "react-router-dom";

const Register = () => {

    let navigate = useNavigate()
    const [userInput, setUserInput] = useState({})
    const [step, setStep] = useState(1)
    const [fieldError, setFieldError] = useState(
        {
            FullName: {message: "", error: false},
            email: {message: "", error: false},
            PhoneNumber: {message: "", error: false},
            password: {message: "", error: false},
            ConfirmPassword: {message: "", error: false},
            // gender: {message: "", error: false},
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
    // const checkIfItIsEmail = () => {
    //
    // }
    return (
        <div className="authenticationContainer">
            <div className="leftSide">
                <div className="leftSide-container">

                    <a onClick={() => navigate("/Login") }>
                        Have an account?

                        <span style={{
                            color: 'var(--primary_green)',
                            marginLeft: '4px'
                        }}>
                            Login in
                            {/*  <div className="link-register-login" >*/}
                            {/*<a className="Register-ash" href="./Login"> Login </a>*/}
                            {/*</div>*/}
                </span>

                    </a>
                    <div className="welcome-text">
                        <h1>Welcome To Norbs</h1>
                        <p>We are an event management platform,
                            aimed at helping you facilitate a smooth event</p>
                    </div>
                    {step === 1 && <StepContainer step={1} headerTitle="let's know you">
                        <div className="okay">
                            <Input text="text" handleChange={handleChange} icon={user} label="FullName"
                                   fieldError={fieldError}/>
                            <Input text="email" handleChange={handleChange} icon={emailIcon} label="email"
                                   fieldError={fieldError}/>
                            <Input text="text" handleChange={handleChange} icon={phoneNumber} label="PhoneNumber"
                                   fieldError={fieldError}/>

                            <Input text="password" handleChange={handleChange} icon={passwordIcon} label="password"
                                   fieldError={fieldError}/>
                            <Input text="password" handleChange={handleChange} icon={passwordIcon}
                                   label="ConfirmPassword" fieldError={fieldError}/>

                            Gender:
                            <br/>
                            <input type="radio" name="gender" />Male <br/>
                            <input type="radio" name="gender"/>Females <br/>
                            <input type="radio" name="gender"/>Others <br/>
                            <br/>

                        </div>
                    </StepContainer>}

                    {step === 2 && <StepContainer step={2} headerTitle="let's secure you">
                        <div className="okay">
                            <Input text="text" handleChange={handleChange} icon={user} label="FullName"
                                   fieldError={fieldError}/>
                            <Input text="email" handleChange={handleChange} icon={emailIcon} label="email"
                                   fieldError={fieldError}/>
                            <Input text="text" handleChange={handleChange} icon={phoneNumber} label="PhoneNumber"
                                   fieldError={fieldError}/>

                            <Input text="password" handleChange={handleChange} icon={passwordIcon} label="password"
                                   fieldError={fieldError}/>
                            <Input text="password" handleChange={handleChange} icon={passwordIcon}
                                   label="ConfirmPassword" fieldError={fieldError}/>

                            Gender:
                            <br/>
                            <input type="radio" name="gender"/>Male <br/>
                            <input type="radio" name="gender"/>Females <br/>
                            <input type="radio" name="gender"/>Others <br/>
                            <br/>

                        </div>
                    </StepContainer>}
                    {step === 1 &&
                        <button onClick={() => setStep(2)} style={{width: '70%'}} className="authentication-button" >Next
                            Step</button>
                    }
                    {step === 2 &&
                        <div style={{display: "flex", justifyContent: "space-between", width: "70%"}}>
                            <button onClick={ () => setStep(1)} style={{width: '35%'}} className="authentication-button-alternate">
                                Go Back
                            </button>
                            <button  style={{width: '45%'}} className="authentication-button"
                                    onClick={handleClick}>Register
                            </button>
                        </div>}
                    <div className="social-media">
                        <a>
                            <div className="social-media-icon">

                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <img src="../../assert/image.png" alt=""/>
            </div>
        </div>
    )

}

export default Register