import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Header from "../Header.js";
import Card from "./Card.js";
import axios from 'axios';

import "./style.css";

function Homepage(){
    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
          'https://sheltered-coast-77536.herokuapp.com/api/posts',
        );
        setData(result.data);
    }, []);
    
    console.log(data.posts)
    
    return (
        <div>
          <Header />
            <div className="App container">
                <div className="row">
                    {data.posts && data.posts.map(post => (
                        <Card
                            key={post._id}
                            post={post}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Homepage;