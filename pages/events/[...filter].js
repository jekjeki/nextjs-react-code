import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { getFilteredEvents } from "../../helper/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert";
import Button from "../../components/ui/Button";
import useSWR from "swr";
import Head from "next/head";

function FilterEventPage() {
  const router = useRouter();
  const [datas, setDatas] = useState();

  const filterData = router.query.filter;

  const { data, error } = useSWR(
    "https://nextjs-test-api-d2643-default-rtdb.firebaseio.com/events.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setDatas(events);
    } else {
      console.log("data");
    }
  }, [data]);
  
  
  let headData = (
    <Head>
      <title>filtered events</title>
      <meta name="description" content={`all events in ...`} />
    </Head>
  );


  if (!datas) {
    return <Fragment>
        {headData}
        <p className="center">Loading...</p>
        </Fragment>;
  }

  const numYear = +filterData[0];
  const numMonth = +filterData[1];
  
  
  const filters = datas.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2020 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <Fragment>
        {headData}
        <ErrorAlert>
          <p>Please insert valid filter data!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Back to Events</Button>
        </div>
      </Fragment>
    );
  }

  // const filteredEvents = props.events

  if (!filters || filters.length === 0) {
    return (
      <Fragment>
        {headData}
        <ErrorAlert>
          <p>No data found !, Please insert valid filter data!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Back to Events</Button>
        </div>
      </Fragment>
    );
  }

  headData = (
    <Head>
      <title>filtered events</title>
      <meta name="description" content={`all events in ${numYear}/${numMonth}`} />
    </Head>
  )

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      {headData}
      <ResultsTitle date={date} />
      <EventList items={filters} />
    </div>
  );
}

// export async function getServerSideProps(context){

//   const { params } = context

//   const filterData = params.filter

//   const numYear = +filterData[0];
//   const numMonth = +filterData[1];

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear < 2020 ||
//     numYear > 2030 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: {
//         hasError: true
//       }
//       // notFound: true,
//       // redirect: {
//       //   destionation: '/error'
//       // }
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       numYear: numYear,
//       numMonth: numMonth
//     }
//   }
// }

export default FilterEventPage;
