import React from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/event-search'
import { useRouter } from 'next/router'

function EventPage() {

  const events = getAllEvents()
  const router = useRouter()

  const findEventsHandler = (selectYear, selectMonth) => {

    router.push(`/events/${selectYear}/${selectMonth}`)
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  )
}

export default EventPage