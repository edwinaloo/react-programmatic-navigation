import React from "react";

function About() {
  return (
    <div>
      <h1>This is my about component. On my about component I have a few details about the home page</h1>
      <img
        src="https://example.com/image1.jpg"
        alt="A beautiful image 1"
        style={{ width: "50%", height: "auto", display: "block", margin: "auto" }}
      />
      <img
        src="https://example.com/image2.jpg"
        alt="A beautiful image 2"
        style={{ width: "50%", height: "auto", display: "block", margin: "auto" }}
      />
      <img
        src="https://example.com/image3.jpg"
        alt="A beautiful image 3"
        style={{ width: "50%", height: "auto", display: "block", margin: "auto" }}
      />
    </div>
  );
}

export default About;
