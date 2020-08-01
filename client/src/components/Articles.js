import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios"


const Articles = ({posts}) => {
    const [article, setArticle] = useState([])

    const deleteArticle = id => {
        axios.delete(`/articles/${id}`)
        .then(res=> alert(res.data))
        setArticle(article.filter(elem => elem._id !== id));
    }
    return (
        <div>
       
            {!posts.length? <div id="preloader">
  <div id="status">&nbsp;</div>
</div>:
             
            
            posts.map((article, key)=>(
            
                <div class="container" key= {key}>
                 
                <div class="section">
                      <div class="col span_2_of_3">
                <div class="blog-post">
                <Link to={{
                    pathname: `/article/${article._id}`
                }}>
                <h1 class="blog-title">{article.title}</h1>
                    </Link>

      
            <h2 class="date">{article.authorname}</h2>
            <p class="blog-content">{article.article}</p>
            <div className="puttons">
              <Link to={`/update/${article._id}`} class="post-link">Edit Article</Link>
              <Link onClick={()=>deleteArticle(article._id)} class="post-link">Delete Article</Link>
              </div>
                            </div>     
                      </div>
                
                      </div>
          </div>
            
                      ))}
           

        
       
        </div>
    );
};

export default Articles;
