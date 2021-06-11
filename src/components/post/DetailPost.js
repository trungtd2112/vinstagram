import { useEffect, useState, Component } from "react";
import axios from "axios";
import Header from "../Header.js";
import Card from "../user/Card";
import CommentSection from "../user/CommentSection";
import "./DetailPost.css";

function DetailPost() {
  const [data, setData] = useState();
  useEffect(async () => {
    const currentURL = window.location.href.toString();
    const n = currentURL.lastIndexOf("/");
    const postId = currentURL.slice(n + 1);
    const result = await axios(
      "https://sheltered-coast-77536.herokuapp.com/api/posts/" + postId
    );
    setData(result.data);
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <Card key={data.post._id} post={data.post} />

          <CommentSection
            className="comments-section"
            key={data.post._id}
            comments={data.comments}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
