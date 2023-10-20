import React from 'react'
import { getAllEvents } from '../dummy-data'
import EventList from '../components/events/event-list';

function HomePage() {

    const eventData = getAllEvents();
    

  return (
    <div>
        <EventList items={eventData} />
    </div>
  )
}

export default HomePage