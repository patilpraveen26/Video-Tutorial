import { useState } from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import axios from "axios";

export function Register(){
    const navigate=useNavigate()
    const[errorUser,setUserError]=useState('');
    const[erroClass,setErrorClass]=useState('');
    const[emailError,setEmailError]=useState('')
    const[user,setUser]=useState({UserId:'',UserName:'',Password:'',Email:'',Mobile:''})

    function handleIdChange(e){
        setUser({
            UserId:e.target.value,
            UserName:user.UserName,
            Password:user.Password,
            Email:user.Email,
            Mobile:user.Mobile
        })
        axios({
            method:'get',
            url:"http://127.0.0.1:5000/users"
        })
        .then((response)=>{
            for(var user of response.data ){
                if(user.Userid===e.target.value){
                    setUserError('User Id Taken - Try another')
                    setErrorClass('text-danger')
                    break;
                }else{
                    setUserError('User Id Available')
                    setErrorClass('text-success')
                }
            }
        })
    }

    function handleUserNameChange(e){
        setUser({
            UserId:user.UserId,
            UserName:e.target.value,
            Password:user.Password,
            Email:user.Email,
            Mobile:user.Mobile
        })
    }

    function handlePasswordChange(e){
        setUser({
            UserId:user.UserId,
            UserName:user.UserName,
            Password:e.target.value,
            Email:user.Email,
            Mobile:user.Mobile
        })
    }

    function handleEmailChange(e){
        setUser({
            UserId:user.UserId,
            UserName:user.UserName,
            Password:user.Password,
            Email:e.target.value,
            Mobile:user.Mobile
        })
        axios({
            method:'get',
            url:"http://127.0.0.1:5000/users"
        })
        .then((response)=>{
            for(var user of response.data ){
                if(user.Email===e.target.value){
                    setEmailError('User Email Taken - Try another')
                    setErrorClass('text-danger')
                    break;
                }else{
                    setEmailError('User Email Available')
                    setErrorClass('text-success')
                }
            }
        })
    }

    function handleMobileChange(e){
        setUser({
            UserId:user.UserId,
            UserName:user.UserName,
            Password:user.Password,
            Email:user.Email,
            Mobile:e.target.value
        })
    }

    function handleSubmit(){
        axios({
            method:'post',
            url:'http://127.0.0.1:5000/registeruser',
            data:user
        })
        alert('Register Successfully')
        navigate('/login')
    }

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
        <div className="border border-2 border-secondary rounded rounded-2 p-3">
            <h2><span className="bi bi-person-add"> </span>Register User</h2>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt className="form-label">UserId</dt>
                    <dd><input className="form-control" onChange={handleIdChange} type="text"/></dd>
                    <dd className={erroClass}>{errorUser}</dd>
                    <dt className="form-label">UserName</dt>
                    <dd><input className="form-control" onChange={handleUserNameChange} type="text"/></dd>
                    <dt className="form-label">Password</dt>
                    <dd><input className="form-control" onChange={handlePasswordChange} type="password"/></dd>
                    <dt className="form-label">Email</dt>
                    <dd><input className="form-control" onChange={handleEmailChange} type="email"/></dd>
                    <dd className={erroClass}>{emailError}</dd>
                    <dt className="form-label">Mobile</dt>
                    <dd><input className="form-control" onChange={handleMobileChange} type="text"/></dd>
                </dl>
                <button className="btn btn-primary">Register</button>
                <p>Exsisting User?<Link to="/login">Login</Link></p>
            </form>
        </div>
        </div>
    )
}