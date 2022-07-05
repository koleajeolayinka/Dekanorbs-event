import Input from "../../components/reuseables/Input";
import emailIcon from "../../assert/email.svg"
import passwordIcon from "../../assert/password.svg"
const handleClick = (e) => {
    console.log(e)
}
const Login = () => {
    return (
        <div>
            <Input text="email" handleClick={handleClick} icon={emailIcon} label="email"/>
            <Input text="password" handleClick={handleClick} icon={passwordIcon} label="password"/>
        </div>
    )

}
export default Login