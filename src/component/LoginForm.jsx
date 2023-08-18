import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessae] = useState('');

    let loginFormSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post('http://localhost:5000/api/v1/userLogin');
            if(response.status === 200){
                let msg = "Login Successfully";
                setMessae(msg);
                setTimeout(() => {
                    setMessae('')
                }, 2500);
            }
        } catch (error) {
            let msg = error.response.data.message;
            setMessae(msg);
            setTimeout(() => {
                setMessae('');
            }, 2500);
        }
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form action="" onSubmit={loginFormSubmit}>
                <label>Email : </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Your Email" />
                <br /><br />
                <label>Password : </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Enter Your Password"/>
                <br /><br />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default LoginForm;