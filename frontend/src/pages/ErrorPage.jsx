import React from "react";
import { useRouteError } from "react-router-dom";
import classes from "./ErrorPage.module.css";

function getErrorClasses(status, classes) {
  return {
    containerClass: `absolutePositioned ${classes.errorPage} ${
      status === "404"
        ? classes.notFound
        : status === "500"
        ? classes.serverError
        : classes.genericError
    }`,
    headingClass:
      status === "404"
        ? classes.notFoundHeading
        : status === "500"
        ? classes.serverErrorHeading
        : classes.genericErrorHeading,
    messageClass:
      status === "404"
        ? classes.notFoundMessage
        : status === "500"
        ? classes.serverErrorMessage
        : classes.genericErrorMessage,
  };
}

function ErrorPage() {
  const errorDetails = useRouteError();
  let errorData;
  try {
    errorData = typeof errorDetails.data === "string" ? JSON.parse(errorDetails.data) : errorDetails.data;
  } catch (e) {
    errorData = errorDetails; // Fallback to the original errorDetails if parsing fails
  }
  let errorMessage = errorData.message || "Something went wrong!";
  let errorStatusText = errorDetails.statusText || "Something went wrong!";
  let errorStatus = errorDetails.status || "500";

  if(errorMessage === "Something went wrong!" && errorData.data ) {
    errorStatusText = errorData.data;

  }

  if(errorMessage.length > 50) {
    errorMessage = errorMessage.substring(0, 30) + "...";
  }

  const { containerClass, headingClass, messageClass } = getErrorClasses(
    errorStatus,
    classes
  );

  console.log(useRouteError());
  return (
    <div className={containerClass}>
      <h1 className={headingClass}>
        {errorStatus} - {errorMessage}
      </h1>
      <p className={messageClass}>{errorStatusText}</p>
      <p className={classes.genericMessage}>
        An error occurred. Please try again later.
      </p>
    </div>
  );
}

export default ErrorPage;
