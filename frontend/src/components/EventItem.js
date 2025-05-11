import classes from "./EventItem.module.css";
import { Link, useSubmit } from "react-router-dom";

function EventItem({ event }) {
  const submitAction = useSubmit();
  function startDeleteHandler() {
    const confirm = window.confirm("Ary You Sure ?");
    if (confirm) {
      submitAction(null, { method: "delete" });
    }
  }

  return (
    <article className={`absolutePositioned ${classes.event}`}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="editEvent">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
