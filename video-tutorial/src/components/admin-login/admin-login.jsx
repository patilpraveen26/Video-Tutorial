import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie';

export function AdminLogin(){
    const[user,setUser]=useState({UserId:'',Password:''})
    const[error,setError]=useState('')
    const navigate=useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['admin-id']);

    function handleIdChange(e){
        setUser({
            UserId:e.target.value,
            Password:user.Password
        })
    }

    function handlePwdChange(e){
        setUser({
            UserId:user.UserId,
            Password:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        axios({
            method:'get',
            url:'http://127.0.0.1:5000/admin'
        })
        .then(response=>{
            for(var auser of response.data){
                if(auser.UserId===user.UserId && auser.Password===user.Password){
                    setCookie("admin-id",user.UserId)
                    navigate('/admin-home')
                    break;
                }else{
                    setError('Invalid Credentials')

                }
            }
        })
    }

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div>
            <h3 className="bi bi-person-fill">Admin Login</h3>
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>Admin Id</dt>
                    <dd><input type="text" onChange={handleIdChange} className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={handlePwdChange} className="form-control"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
                <h3 className="text-danger">{error}</h3>
            </form>
            </div>
        </div>
    )
}