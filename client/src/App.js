import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';
import AddArticle from './components/AddArticle';
import ArticleView from './components/ArticleView';
import EditArticle from './components/EditArticle';

function App() {
  const [posts, setposts] = useState([])

  useEffect(() => {
   axios.get('/articles')
   .then(res => setposts(res.data))
   .catch(err => console.log(err))

  }, []);
  return (
    <div className="">
        <Navbar/>
        <Route exact path="/" 
          render={ () => <Articles posts={posts} />} />
        <Route path="/article/:id" 
          render={ (props) => <ArticleView {...props} posts={posts} />} />
        <Route path="/update/:id" 
          render={ (props) => <EditArticle {...props} posts={posts} />} />
        <Route path="/add-article" component={AddArticle} />
        <Footer/>
    </div>
  );
}

export default App;
