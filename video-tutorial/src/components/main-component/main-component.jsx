import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function MainComponent(){
    const[userEmail,setUserEmail]=useState('')
    const navigate=useNavigate();
    
    function handleEmailChange(e) {
        setUserEmail(e.target.value)
    }
    function handleGetStartedClick(){
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/users"
        })
        .then((response)=>{
            for(var user of response.data){
                if(userEmail===user.Email){
                    navigate('/login');
                    break;
                }else{
                    navigate('/unregister')
                }
            }
        })
    }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <main>
          <h1>Learn & Design</h1>
          <p>Watch Videos, Learn Technology</p>
          <div>
            <div className='input-group'>
              <input type='email' className='form-control'onChange={handleEmailChange} placeholder='Enter Your Email'/>
              <button className='btn btn-danger' onClick={handleGetStartedClick}>Get Started<span className='chevron-right'></span></button>
            </div>
          </div>
        </main>
        </div>
    )
}