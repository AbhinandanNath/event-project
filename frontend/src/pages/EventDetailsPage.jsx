import EventItem from '../components/EventItem'
import { redirect, useRouteLoaderData } from 'react-router-dom'

const EventDetailsPage = () => {

  const data = useRouteLoaderData('event-details');

  return (
    <EventItem event={data.event} />
  )
}

export default EventDetailsPage


export async function eventItemLoader({ request, params }) {

  let url =  'http://localhost:8080/events/';
  if(params.eventId !== ':eventId') {
    url = url + params.eventId;
  } else {
    url = url + 'e1';
  }
  const awaitedResponse = await fetch(url);
 
  if (!awaitedResponse.ok) {
    // throw new Response(
    //   JSON.stringify({
    //   isError: true,
    //   message: 'Could not fetch event!',
    //   }),
    //   {
    //   status: awaitedResponse.status,
    //   statusText: awaitedResponse.statusText,
    //   }
    // );
    return redirect('/events');
    // Note: The `throw` statement will stop execution, so the `redirect` will not be reached.
    // To achieve both, you can log the error and then redirect instead of throwing.
  } else {
    return awaitedResponse;
  }
}
export async function action({ request, params }) {

  let url =  'http://localhost:8080/events/'+params.eventId;
  const awaitedResponse = await fetch(url, {
    method: request.method
  });
 
  if (!awaitedResponse.ok) {
    throw new Response(
      JSON.stringify({
        isError: true,
        message: 'Could not Delete event!',
      }),
      {
        status: 200,
        statusText: awaitedResponse.statusText,
      }
    );
  } else {
   redirect('/events')
  }
}