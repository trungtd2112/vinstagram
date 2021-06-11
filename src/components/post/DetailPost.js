import { useEffect, useState, Component } from 'react'
import axios from 'axios';
import Header from "../Header.js";
import Card from "../user/Card"
import CommentSection from "../user/CommentSection"
import "./DetailPost.css";

function DetailPost(){
    const [data, setData] = useState();
    useEffect(async () => {
        const currentURL = window.location.href.toString();
        const n = currentURL.lastIndexOf('/');
        const postId = currentURL.slice(n+1);
        const result = await axios('https://sheltered-coast-77536.herokuapp.com/api/posts/'+postId);
        setData(result.data);
    },[]);
    
    
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="row" >
                        <Card
                            key={data.post._id}
                            post={data.post}
                            comments={data.comments}
                        />
                        <CommentSection className="comments-section" />
                </div>
            </div>
        </div>
    )
}

export default DetailPost;