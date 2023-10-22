import React from 'react'
import EventItem from './event-item'
import classes from './event-list.module.css'


function EventList(props) {

    const { items } = props

  return (
    <ul className={classes.list}>
        {items.map((it) => <EventItem key={it.id}
            id={it.id} 
            title={it.title}
            image={it.image}
            date={it.date}
            location={it.location}
            />)}
    </ul>
  )
}

export default EventList