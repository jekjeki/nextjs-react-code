import classes from './comment-list.module.css';

function CommentList(props) {
  const {comments} = props 
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {
        comments.map((co)=>(
          <div key={co._id}>
            <li>
              <p>{co.comment}</p>
              <div>
                By <address>{co.email}</address>
              </div>
            </li>
            {/* <li>
              <p>{co.comment}</p>
              <div>
                By <address>{co.email}</address>
              </div>
            </li> */}
          </div>
        ))
      }
    </ul>
  );
}

export default CommentList;