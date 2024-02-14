import React from "react";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import Profile from "./components/profile";

function App() {
  return (
    <>
    <LoginButton></LoginButton>
    <Profile></Profile>
    <LogoutButton></LogoutButton>
    </>
  );
}

export default App;