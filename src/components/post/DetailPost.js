import { useEffect, useState, Component } from "react";
import axios from "axios";
import Header from "../Header.js";
import Card from "../user/Card";
import CommentSection from "../user/CommentSection";
import "./DetailPost.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext.js";

function DetailPost() {
  const [data, setData] = useState();
  const { userState: { user }} = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await axios(
        `https://sheltered-coast-77536.herokuapp.com/api/posts/${id}`
      );
      setData(result.data);
    })();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="">
          {
            data && 
            <>
              <Card post={data.post} />

              <CommentSection 
                className=" re-location"
                post={data.post}
                userComment={user}
                comments={data.comments}
              />
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
