import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);

    // after logging the user in, redirect to the home page!
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Login</h1>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={formData.username}
        onChange={handleChange}
        style={{ padding: "10px", marginBottom: "10px", width: "100%", maxWidth: "400px", borderRadius: "5px", border: "none", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)" }}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        style={{ padding: "10px", marginBottom: "20px", width: "100%", maxWidth: "400px", borderRadius: "5px", border: "none", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)" }}
      />
      <button type="submit" style={{ padding: "10px", width: "100%", maxWidth: "400px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)" }}>Login</button>
    </form>
  );
}

export default Login;
