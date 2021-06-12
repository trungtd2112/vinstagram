import axios from 'axios';
import React, { useEffect, useState } from "react";
import Header from "../Header.js";
import Card from "./Card.js";
import "./style.css";


function Homepage(){
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await axios(
              'https://sheltered-coast-77536.herokuapp.com/api/posts',
            );
            setData(result.data.posts);
        })();
    }, []);

    const handleOnSearch = posts => {
        setData(posts);
    }
    
    return (
        <div>
          <Header onSearch={handleOnSearch} />
            <div className="App container">
                <div className="row">
                    {data && data.map(post => (
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