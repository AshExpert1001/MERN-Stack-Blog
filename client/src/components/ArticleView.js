import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import spinner from '../loading.gif';

const ArticleView = (props) => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setauthorname] = useState("");
    
    useEffect(()=>{
        axios.get(`/articles/${props.match.params.id}`)
        .then(res=>[
            setTitle(res.data.title),
            setArticle(res.data.article),
            setauthorname(res.data.authorname)
        ])
        .catch(err=> console.log(err));
    },[props]);
    return (
        <div className="container">
        { !title || !article || !authorname ?(
            <div className="text-center my-4">
                <img src={spinner} alt="Loading..." style={{width:'80px'}}/>
            </div> 
            ) : (
           
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Author: {authorname}</h6>
                    <p className="card-text">{article}</p>
                    <Link to="/" className="btn btn-warning">Back To Home</Link>
                </div>
            </div>
      
        ) }
    </div>
    )
}

export default ArticleView
