import { useHistory } from 'react-router-dom';
function Post({toukou}){
  const history = useHistory();
  
  return (
    <div>
      <div className="Post">
        <div className="Post-image-div">
          <p className="caption">{toukou.content}</p>
          <img
            src={toukou.imageURL}
            alt="post img"
            onClick={() => {history.push("/post/"+toukou._id)}}
          />
        </div>
      </div>
    </div>
  );
}

export default Post;