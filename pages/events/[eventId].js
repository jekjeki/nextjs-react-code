import React from 'react'
import { useRouter } from 'next/router'
import { getEventById, getAllEvents } from '../../helper/api-util'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import LogisticsItem from '../../components/event-detail/logistics-item'
import EventContent from '../../components/event-detail/event-content'
import Head from 'next/head'

function EventDetailPage(props) {
  const event = props.selectedEvent
  
  if(!event){
    return <h1>
      {/* Hey!, 404 Page not found ! */}
      Loading ... 
    </h1>
  }

  return (
    <div>
      <Head>
        <title>{event.title}</title>
        <meta 
          name='description'
          content={event.description}
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics 
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
       />
       <EventContent>
          <p>{event.description}</p>
       </EventContent>
    </div>
  )
}

export async function getStaticPaths(){

  const data = await getAllEvents()
  const path = data.map((event)=>(
    {params: {eventId: event.id} }
  ))

  return {
    paths: path,
    fallback: true
  }
}

export async function getStaticProps(context){
  const eventId = context.params.eventId

  const event = await getEventById(eventId)

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 60
  }
  
}

export default EventDetailPage