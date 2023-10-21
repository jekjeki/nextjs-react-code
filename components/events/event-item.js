import Link from "next/link";
import React from "react";
import classes from "./event-item.module.css";
import Button from "../ui/Button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/` + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <address className={classes.address}>{formatAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            Explore More   
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
