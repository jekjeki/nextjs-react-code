import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [commentList, setCommentList] = useState([])
  const [isFetch, setIsFetch] = useState()
 
  const notificationCtx = useContext(NotificationContext)

  useEffect(()=>{
    if(showComments){
      fetch('/api/comments/'+eventId, {
        method: 'GET',
      })
      .then(res=>res.json())
      .then(data=>{
        setCommentList(data.comments)
      })
  
    }
  },[showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {

    notificationCtx.showNotification({
      title: 'pending',
      message: 'pending insert',
      status: 'pending'
    })

    // send data to API
    fetch('/api/comments/'+eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-type':'application/json'
      }
    })
    .then((res)=>{
      if(res.ok){
        return res.json()
      }

      return res.json().then((data)=>{
        throw new Error(data.message)
      })
    })
    .then((data)=>{
      notificationCtx.showNotification({
        title: 'insert successful',
        message: 'success insert a comment',
        status: 'success'
      })
      console.log(data)
    })
    .catch((error)=>{
      notificationCtx.showNotification({
        title: 'failed',
        message: error.message,
        status: 'error'
      })
    })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={commentList.filter((co)=>co.eventId == eventId)} />}
    </section>
  );
}

export default Comments;