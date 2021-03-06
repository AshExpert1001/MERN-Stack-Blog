import React, { useState } from 'react'
import axios from 'axios';

const AddArticle = () => {

    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setauthorname] = useState("");
    const [message, setMessage] = useState("");

    const changeOnClick = e =>{
        e.preventDefault();

        const articles ={
            title, article, authorname
        };
        axios.post('articles/add', articles)
        .then(res=>setMessage(res.data))
        .catch(err=>{
            console.log(err);
        })
        
        setTitle("");
        setArticle("");
        setauthorname("");
    };
    return (
        <div className="container my-4">
            <form 
            onSubmit={changeOnClick}
            encType="multipart/from-data"
            style={{width:'500px', margin:'auto auto'}}>
            <h1 className="text-success">Add Article</h1>
            <p className="text-success">{message}</p>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Author Name</label>
                <input 
                type="text" 
                value={authorname}
                onChange={e=>setauthorname(e.target.value)}
                className="form-control" 
                placeholder="Author Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Article Title</label>
                <input 
                type="text" 
                value={title}
                onChange={e=>setTitle(e.target.value)}
                className="form-control" 
                placeholder="Article Title"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Article Content</label>
                <textarea 
                className="form-control" 
                value={article}
                onChange={e=>setArticle(e.target.value)}
                rows="7"></textarea>
            </div>
            <button type="submit" className="btn btn-outline-success">Add Article</button>
            </form>            
        </div>
    )
}
export default AddArticle;