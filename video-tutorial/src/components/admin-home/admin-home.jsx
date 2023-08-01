import { useEffect, useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';


export function AdminHome(){
    const[video,setVideo]=useState([]);
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate=useNavigate();

    useEffect(()=>{
       if(cookies['admin-id']==undefined){
        navigate('/admin-login');
       }else{
        axios({
            method:'get',
            url:'http://127.0.0.1:5000/videos'
        })
        .then(response=>{
            setVideo(response.data)
        })
       }
    },[])
    function handleSignOut(){
        removeCookie('admin-id');
        navigate('/admin-login');
    }
    return(
        <div className="d-flex">
            <div>
            <h2>AdminHome</h2>
            <span style={{float:"right"}}>  <Link to='/admin-login' onClick={handleSignOut} className="btn btn-link">SignOut</Link> </span>
            <div className="mt-2">
                <Link to='/add-video' className="btn btn-success">Add New Video</Link>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Preview</td>
                        <td>Action</td>
                     </tr>
                </thead>
                <tbody>
                    {
                        video.map(vid=>
                            <tr key={vid.VideoId}>
                                <td>{vid.Title}</td>
                                <td>
                                    <iframe src={vid.Url} width="100" height="100"></iframe>
                                </td>
                                <td>
                                    <Link to={`/view-video/${vid.VideoId}`} className="btn btn-primary me-2"><span className="bi bi-eye"></span></Link>
                                    <Link to={`/edit-video/${vid.VideoId}`} className="btn btn-warning me-2"><span className="bi bi-pen-fill"></span></Link>
                                    <Link to={`/deletevideo/${vid.VideoId}`} className="btn btn-danger"><span className="bi bi-trash-fill"></span></Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}