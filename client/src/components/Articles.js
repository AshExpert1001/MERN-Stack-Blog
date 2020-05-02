import React, { useState } from 'react'
import spinner from '../loading.gif';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Articles = ({posts}) => {
    const [article, setArticle] = useState([]);
    const [message, setMessage] = useState("");
    //DELETE Article by ID
    const deleteArticle = id =>{
        axios.delete(`/articles/${id}`)
        .then(res => setMessage(res.data))
        .catch(err=> console.log(err))
        setArticle(article.filter(elem => elem._id !== id));

    }

    return (
        <div className="container my-3"> 
            
            <p className="text-success">{message}</p>
             
           {  !posts.length ? (
            <div className="text-center my-4">
                <img src={spinner} alt="Loading..." style={{width:'80px'}}/>
            </div>
           ):
               posts.map((article, key)=>(
                <div className="card my-2" key={key}>
                <div className="card-body">
                    <Link
                    to={{pathname:`/article/${article._id}`}}
                    >
                    <h5 className="card-title text-black">{article.title}</h5>
                    </Link>
                    <h6 className="card-subtitle mb-2 text-muted">Author: {article.authorname}</h6>
                    <p className="card-text">{article.article}</p>
                    <Link to={`/update/${article._id}`} className="btn btn-outline-success mr-2">Edit Article</Link>
                    <button onClick={()=>deleteArticle(article._id)} className="btn btn-outline-danger">Delete Article</button>
                </div>
                </div>
            ))}

        </div>
    );
}

export default Articles;


