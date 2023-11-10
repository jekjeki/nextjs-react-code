import React from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/event-search'
import { useRouter } from 'next/router'
import Head from 'next/head'

function EventPage(props) {
  const router = useRouter()
  const { events } = props

  const findEventsHandler = (selectYear, selectMonth) => {

    router.push(`/events/${selectYear}/${selectMonth}`)
  }

  return (
    <div>
      <Head>
          <title>Events page</title>
          <meta
            name='description'
            content='event page next website'
          />
        </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  )
}

export async function getStaticProps(){

  const events = await getAllEvents()

  return {
    props: {
      events: events
    }, 
    revalidate: 60
  }
}

export default EventPage