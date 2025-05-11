import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./components/navigation/MainNavigation";

function RootPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
