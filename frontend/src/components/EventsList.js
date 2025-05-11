import classes from "./EventsList.module.css";
import { Link } from "react-router-dom";

function EventsList({ events }) {
  return (
    <div className={classes.events + " absolutePositioned"}>
      <ul className={classes.eventList}>
        {events.map((event) => (
          <li key={event.id} className={classes.eventCard}>
            <Link to={event.id} >
              <img src={event.image} alt={event.name} />
              <h2>{event.name || event.title}</h2>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
