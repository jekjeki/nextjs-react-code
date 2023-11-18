import { useContext, useRef } from 'react';
import classes from './newsletter-regristation.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {

  const email = useRef()
  const notificationCtx = useContext(NotificationContext)

  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    const data = {email: email.current.value}


  notificationCtx.showNotification({
    title: 'Sign up',
    message: 'pending regis',
    status: 'pending'
  })

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type':'application/json'
      }
    })
    .then(res=>{
      if(res.ok){
        return res.json()
      }

      return res.json().then(data=>{
        throw new Error(data.message)
      })

    })
    .then((data)=>{
      console.log(data)

      notificationCtx.showNotification({
        title: 'success register',
        message: 'successful regis newsletter',
        status: 'success'
      })
    })
    .catch((error)=>{
      notificationCtx.showNotification({
        title: 'failed register',
        message: error.message,
        status: 'error'
      })
    })

  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={email}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;