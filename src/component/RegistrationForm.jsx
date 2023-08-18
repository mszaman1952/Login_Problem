import { useState } from "react";
import axios from 'axios';
const RegistrationForm = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState();

    let handelSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post('http://localhost:5000/api/v1/registration',{
                name, email, password
            });
            let msg = response.data.message;
            setMessage(msg)
            setTimeout(() => {
            setMessage('')
            }, 2500);
            // clear all fields 
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            let msg = `Registration Failed ${error.response.data.message}`;
            setMessage(msg)
            setTimeout(() => {
                setMessage('')
            }, 2500);
        }
    }

    return (
        <div>
            <h1>Registration Form</h1>
            <form action="" onSubmit={handelSubmit}>
                <label>Name : </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name"/>
                <br /> <br />
                <label>Email : </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Your Email"/>
                <br /><br />
                <label>Password : </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Enter Your Password"/><br /><br />
                <button type="submit">Registration</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegistrationForm;