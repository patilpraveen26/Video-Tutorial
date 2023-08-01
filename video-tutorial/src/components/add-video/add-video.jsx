import { Link, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useState,useEffect } from "react";

export function AddVideo(){
    const[categories,setCategories]=useState([]);
    const navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            VideoId:0,
            Title:'',
            Url:'',
            Likes:0,
            Dislikes:0,
            CategoryId:0,
            Views:0
            
        },
        onSubmit:(values)=>{
            axios({
                method:'post',
                url:'http://127.0.0.1:5000/addvideo',
                data:values
            })
            alert('Video Added Successfully..');
            navigate("/admin-home");
        }
    })

    useEffect(()=>{
        axios({
            method:'get',
            url:'http://127.0.0.1:5000/categories'
        })
        .then(response=>{
            response.data.unshift({Categoryid:'-1',CategoryName:'choose category'})
            setCategories(response.data)
            
        })
    },[])

    return(
        <div>
            <h2>Add Video</h2>
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>VideoId</dt>
                <dd><input type="number" onChange={formik.handleChange} name="VideoId"/></dd>
                <dt>Title</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Title"/></dd>
                <dt>Url</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Url"/></dd>
                <dt>Likes</dt>
                <dd><input type="number" onChange={formik.handleChange} name="Likes"/></dd>
                <dt>Dislikes</dt>
                <dd><input type="number" onChange={formik.handleChange} name="Dislikes"/></dd>
                <dt>Views</dt>
                <dd><input type="number" onChange={formik.handleChange} name="Views"/></dd>
                <dt>CategoryId</dt>
                <dd>
                    <select name="CategoryId" onChange={formik.handleChange}>
                        {
                            categories.map(category=>
                                <option value={category.CategoryId} key={category.CategoryId}>{category.CategoryName.toUpperCase()}</option>
                                )
                        }
                    </select>
                </dd>
            </dl>
            <button className="btn btn-primary">Add Video</button>
            </form>
            <p>
                <Link to='/admin-home'>Back to home</Link>
            </p>
        </div>
    )
}