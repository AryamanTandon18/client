import { useState } from "react";


function Ap() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="main-container">
      <div className="comment-flexbox">
        
        <h3 className="comment-text">Comment</h3>
        {comments.map((text) => (
        <div className="comment-container">{text}</div>
      ))}
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Ap;
