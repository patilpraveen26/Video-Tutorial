import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";


export function ViewVideo(){

    const[video,setVideo]=useState([{VideoId:0,Title:'',Url:'',Likes:0,Dislikes:0,Views:0,CategoryId:0}]);
    

    useEffect(()=>{
        axios({
            method:'get',
            url:`http://127.0.0.1:5000/videos/${params.id}`
        })
        .then(response=>{
            setVideo(response.data)
        })
    },[])
    
    const params=useParams();

    return(
        <div>
            <h2>{video[0].Title}</h2>
            <iframe src={video[0.].Url} width='400' height='300'>

            </iframe>
            <div>
            <Link to='/admin-home'>Back to home</Link>
            </div>

        </div>
    )
}