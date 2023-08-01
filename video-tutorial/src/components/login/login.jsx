import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useCookies} from 'react-cookie';

export function Login(){
    const[login,setLogin]=useState({userId:'',Password:''});
    const[error,setError]=useState('');
    const navigate=useNavigate();
    const[cookies,setCookie,removeCookie]=useCookies(['user-id'])

    function handleIdChange(e){
        setLogin({
            userId:e.target.value,
            Password:login.Password
        })
    }

    function handlePwdChange(e){
        setLogin({
            userId:login.userId,
            Password:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        axios({
            method:'get',
            url:'http://127.0.0.1:5000/users'
        })
        .then((response)=>{
            for(var user of response.data){
                if(user.UserId===login.userId && user.Password===login.Password){
                    setCookie('user-id',login.userId)
                    navigate('/videos');
                    break;
                }else{
                    setError('Inavalid Credentials')
                }
            }
        })
    }

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="border border-primary border-2 rounded rounded-2 p-3" >
            <h2 className="bi bi-person-circle"> User Login</h2>
            <form onSubmit={handleSubmit}>
                <dl >
                    <dt className="form-label">UserId</dt>
                    <dd><input type="text" onChange={handleIdChange} className="form-control" /></dd>
                    <dt className="form-label">Password</dt>
                    <dd><input type="password" onChange={handlePwdChange} className="form-control"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
                <p>New User? <Link to="/register">Register</Link></p>
                <h4 className="text-danger">{error}</h4>
            </form>
            </div>
        </div>
    )
}