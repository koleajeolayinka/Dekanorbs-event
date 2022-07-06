import Input from "../../components/reuseables/Input";
import emailIcon from "../../assert/email.svg"
import passwordIcon from "../../assert/password.svg"
import "./login.css"

const handleClick = (e) => {
    console.log(e)
}


const Login = () => {
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
                        <Input text="email" handleClick={handleClick} icon={emailIcon} label="email"/>
                        <Input text="password" handleClick={handleClick} icon={passwordIcon} label="password"/>
                        <button>Create An Account</button>
                    </div>
                    <div className="social-media">
                        <a>
                            <div className="social-media-icon"></div>
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