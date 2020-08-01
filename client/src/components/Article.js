import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Article = (props) => {
    const [title, setTitle] = useState('');
    const [article,setArticle] = useState("");
    const [authorname,setAuthorName] = useState("");
    
    useEffect(() => {
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorName(res.data.authorname)
        ])
        .catch(Error => console.log(Error));
    }, [props]);
    
    
    return (


        <div>

{!title || !article || !authorname ? <div id="preloader">
  <div id="status">&nbsp;</div>
</div> :
  <div>          
 <div id="header">

    <h1 id="logo">{title}</h1>
</div>

<div id="content">
<h1> {authorname} </h1>
<div class="line"></div>

    <p>{article}</p>
    <Link to="/" class="post-link">Back To Home</Link>

</div>


  </div>     }


        </div>
    );
};

export default Article;


