import React from 'react'
import EventItem from './event-item'


function EventList(props) {

    const { items } = props

  return (
    <ul>
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