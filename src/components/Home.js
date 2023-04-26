import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Home page. This is the page u will first see when u log in</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXWjkRvkrEyBK4U4mhOrO1Z9hlR-6iomAOw&usqp=CAU"
        alt="A beautiful image"
        style={{ width: "50%", height: "auto", display: "block" }}
      />
    </div>
  );
}

export default Home;
