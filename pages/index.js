import React from 'react'
import { getFeaturedEvents } from '../helper/api-util';
import EventList from '../components/events/event-list';
import Head from 'next/head';

function HomePage(props) {

    const {featureEvents} = props 
  
  return (
    <div>
        <Head>
          <title>Next events</title>
          <meta
            name='description'
            content='find lot event in next'
          />
        </Head>
        <EventList items={featureEvents} />
    </div>
  )
}

export async function getStaticProps(){
  
  const data = await getFeaturedEvents()

  return {
    props: {
      featureEvents: data
    },
    revalidate: 1800
  }
}

export default HomePage