import { Link, Params, useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { useState,useEffect } from "react";
import { Formik, useFormik } from "formik";

export function EditVideo(){
    const params = useParams();
    const[videos,setVideos]=useState([{VideoId:0,Title:'',Url:'',Likes:0,Dislikes:0,Views:0,CategoryId:0}]);
    const[category,setCategory]=useState([]);
    const navigate=useNavigate();

    const formik = useFormik({
        initialValues:{
            VideoId:videos[0].VideoId,
            Title:videos[0].Title,
            Url:videos[0].Url,
            Likes:videos[0].Likes,
            Dislikes:videos[0].Dislikes,
            Views:videos[0].Views,
            CategoryId:videos[0].CategoryId
        },
        onSubmit:(values)=>{
            axios({
                method:'put',
                url:`http://127.0.0.1:5000/updatevideo/${params.id}`,
                data:values
            })
                alert('Video Submitted');
                navigate('/admin-home')

            
        },
        enableReinitialize: true
    })
    useEffect(()=>{
        LoadCategories();
        LoadVideos();
    },[])

    function LoadVideos(){
        axios({
            method:'get',
            url:`http://127.0.0.1:5000/videos/${params.id}`
        })
        .then(response=>{
           setVideos(response.data)
        })
    }
    function LoadCategories(){
        axios({
            method:'get',
            url:'http://127.0.0.1:5000/categories'
        })
        .then(response=>{
            setCategory(response.data)
        })
    }
    return(
        <div>
            <h2>Add Video</h2>
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>VideoId</dt>
                <dd><input type="number" value={formik.values.VideoId} onChange={formik.handleChange} name="VideoId"/></dd>
                <dt>Title</dt>
                <dd><input type="text"  value={formik.values.Title} onChange={formik.handleChange} name="Title"/></dd>
                <dt>Url</dt>
                <dd><input type="text" value={formik.values.Url} onChange={formik.handleChange} name="Url"/></dd>
                <dt>Likes</dt>
                <dd><input type="number" value={formik.values.Likes} onChange={formik.handleChange} name="Likes"/></dd>
                <dt>Dislikes</dt>
                <dd><input type="number" value={formik.values.Dislikes} onChange={formik.handleChange} name="Dislikes"/></dd>
                <dt>Views</dt>
                <dd><input type="number" value={formik.values.Views} onChange={formik.handleChange} name="Views"/></dd>
                <dt>CategoryId</dt>
                <dd>
                    <select name="CategoryId" value={formik.values.CategoryId} onChange={formik.handleChange}>
                        {
                            category.map(category=>
                                <option value={category.CategoryId} key={category.CategoryId}>{category.CategoryName.toUpperCase()}</option>
                                )
                        }
                    </select>
                </dd>
            </dl>
            <button className="btn btn-primary">Update Video</button>
            </form>
            <p>
                <Link to='/admin-home'>Back To Home</Link>
            </p>
        </div>
    )
}