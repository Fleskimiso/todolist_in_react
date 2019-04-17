
import React, {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Contact = () =>
{
    const  [posts,setposts] = useState([]);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res);
            setposts(res.data.slice(0,10));
        })
    },[]);
    const postlist = posts.length ? ( posts.map(post =>{
        return (
            <div id={post.id} className="post card">
                <div className="card-content">
                <Link to={'/' + post.id}>
                <span className="card-title">  {post.title} </span>
                </Link>
                <p>
                    {post.body}
                </p>
                </div>
            </div>
        )
    }) ) :
       ( <div className="center">No posts yet.</div> ) ;

    return (
        <div className="container">
            <h4 className="center">About</h4>
            {postlist}
        </div>
    )
}
export default Contact;