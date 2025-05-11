import React from 'react';
import classes from './HomePage.module.css';

function HomePage() {
  return (
    <div className={`absolutePositioned ${classes.homePage}`}>
      <div className={classes.heroSection}>
        <h1 className={classes.title}>Welcome to the Advanced React Router Project</h1>
        <p className={classes.subtitle}>
          Explore the power of React Router with dynamic routing, error handling, and more!
        </p>
      </div>
      <div className={classes.content}>
        <p>
          This project demonstrates advanced concepts of React Router, including nested routes,
          error pages, and dynamic styling. Feel free to navigate through the application and
          explore its features.
        </p>
      </div>
    </div>
  );
}

export default HomePage;