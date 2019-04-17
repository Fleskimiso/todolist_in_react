import React,{useEffect,useState} from "react";
import axios from 'axios';

const Post = (props) =>{

    const [post,setpost] = useState();

    useEffect(() =>{
        let id = props.match.params.post_id;
        axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
        .then(res =>{
            console.log(res);
            setpost(res.data);
        })
    })

    const postcontent = post ?  ( <div className="post">
        <h4 className="center"> {post.title} </h4>
        <p>{post.body}</p>
    </div>)
    :
    (
        <div className="center">Loading postMessage...</div>
    )
    return(
            <div>
                {postcontent}
            </div>
    )
}
export default Post;