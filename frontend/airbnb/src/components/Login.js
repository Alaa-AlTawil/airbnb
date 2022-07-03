import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
    async function loginfunction(){
        
        let email=document.getElementById("email")
        let password=document.getElementById("password")
        await axios.post(`http://127.0.0.1:8000/api/login`, {email:email.value, 
        password:password.value})
        .then(res => {
          localStorage.setItem("userid",res.data["_id"]);
          navigate('/admin')
          
         
        })

    }
    return (  
        <div className="login">
            <center>
            <h1>Login</h1>
                <div><input id="email" type={'Email'} placeholder='Email'/></div>
                <div><input id="password" type={'Password'} placeholder='password'/></div>
                <div><button className="btn" onClick={()=>{loginfunction()}}>login</button></div>
                </center>
        </div>
    );
}

export default Login;