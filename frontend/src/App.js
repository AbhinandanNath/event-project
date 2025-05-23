// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loadData } from "./pages/EventsPage";
import EventDetailsPage, { eventItemLoader, action as deleteEventAction } from "./pages/EventDetailsPage";
import NewEventPage ,{action as newEventAction}from "./pages/NewEventPage";
import RootPage from "./RootPage";
import ErrorPage from "./pages/ErrorPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRootLayout from "./pages/EventsRootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRootLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: loadData,
              errorElement: <ErrorPage />,
            },
            {
              path: ":eventId",
              id: "event-details",
              loader: eventItemLoader,
              errorElement: <ErrorPage />,
              children: [
                {
                  index: true,
                  element: <EventDetailsPage />,
                  action: deleteEventAction
                },
                { path: "editEvent", element: <EditEventPage /> , action: newEventAction },
              ],
            },

            { path: "newEvent", element: <NewEventPage />, action: newEventAction },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
