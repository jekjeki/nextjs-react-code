import React from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import LogisticsItem from '../../components/event-detail/logistics-item'
import EventContent from '../../components/event-detail/event-content'

function EventDetailPage() {

  const router = useRouter()
  const eventId = router.query.eventId 
  const event = getEventById(eventId)
  
  if(!event){
    return <h1>
      Hey!, 404 Page not found !
    </h1>
  }

  return (
    <div>
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

export default EventDetailPage