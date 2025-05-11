import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';;


const EventsPage = () => {
  const fetchedData = useLoaderData();

  if(fetchedData.isError) {
    return <p className='absolutePositioned'>{fetchedData.message}</p>;
  }
  const events = fetchedData.events;
  // console.log('Fetched Events:', fetchedData);
  return (
    <EventsList events={events} />
  )
}

export default EventsPage


export async function loadData() {

  const awaitedResponse = await fetch('http://localhost:8080/events');
  if (!awaitedResponse.ok) {
    // throw new Error('Could not fetch events!');
    throw new Response(
      JSON.stringify({
        isError: true,    
        message: 'Could not fetch events!',
      }),
      {
        status: awaitedResponse.status,
        statusText: awaitedResponse.statusText,
      }
    );
    //return {isError : true, message : 'Could not fetch events!'};
  } else {
    // const resData = await awaitedResponse.json();
    return awaitedResponse;
  }

}