import React from 'react'
import EventForm from '../components/EventForm';
import { redirect } from 'react-router-dom';
function NewEventPage() {
  return (
    <div className='absolutePositioned'>
     <EventForm />
    </div>
  )
}

export default NewEventPage


export async function action({ request }) {
  const formData = await request.formData();
  const eventData = Object.fromEntries(formData);
  const awaitedResponse = await fetch('http://localhost:8080/events', {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!awaitedResponse.ok) {
    throw new Response(
      JSON.stringify({
        isError: true,
        message: 'Could not create event!',
      }),
      {
        status: awaitedResponse.status,
        statusText: awaitedResponse.statusText,
      }
    );
  } else {
    return redirect('/events')
  }
}