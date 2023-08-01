import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";


export function DeleteVideo(){

    const[video,setVideo]=useState([{VideoId:0,Title:'',Url:'',Likes:0,Dislikes:0,Views:0,CategoryId:0}]);
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        axios({
            method:'get',
            url:`http://127.0.0.1:5000/videos/${params.id}`
        })
        .then(response=>{
            setVideo(response.data)
        })
    },[])
    
    function handleDeleteClick(){
        axios({
            method:'delete',
            url:`http://127.0.0.1:5000/deletevideo/${params.id}`
        })
        alert('Video Deleted');
        navigate('/admin-home')
    }

    return(
        <div>
            <h3>Deleting Video <span style={{fontWeight:'bold'}}>{video[0].Title}</span> are you sure?</h3>
            <iframe src={video[0.].Url} width='400' height='300'>

            </iframe>
            <div>
            <button onClick={handleDeleteClick} className="btn btn-danger">Yes</button>
            <Link to='/admin-home' className="ms-2 btn btn-warning">Cancel</Link>
            </div>

        </div>
    )
}