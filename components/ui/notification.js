import React, { useContext } from 'react'
import classes from './notification.module.css'
import NotificationContext from '../../store/notification-context'

function Notification(props) {

    const notificationCtx = useContext(NotificationContext)

    const {title, message, status} = props

    let statusClass = ''

    if(status == 'success'){
        statusClass = classes.success
    }

    if(status == 'error'){
        statusClass = classes.error
    }

    if(status == 'pending'){
        statusClass = classes.pending
    }

    const activeClass = `${classes.notification} ${statusClass}`

  return (
    <div className={activeClass} onClick={notificationCtx.hideNotification}>
        <h2>{title}</h2>
        <p>{message}</p>
    </div>
  )
}

export default Notification