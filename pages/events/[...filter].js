import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert";
import Button from "../../components/ui/Button";

function FilterEventPage() {
  const router = useRouter();

  const filterData = router.query.filter;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2020 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Please insert valid filter data!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Back to Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Please insert valid filter data!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Back to Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilterEventPage;
