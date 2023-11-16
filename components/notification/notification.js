import React, { useContext } from 'react'
import classes from './notification.module.css'

function Notification(props) {

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
    <div className={activeClass}>
        <h2>{title}</h2>
        <p>{message}</p>
    </div>
  )
}

export default Notification