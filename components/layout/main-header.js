import Link from "next/link";
import React from "react";
import classes from "./mainheader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>NextLogo</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Browse All Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
