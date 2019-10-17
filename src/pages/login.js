import React, { useState, } from "react";
import "./login.css";
import api from "../services/api";
import logo from "../assets/logo.svg";

export default function login({ history }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState("");

  async function handleSubmit(e) { 
    e.preventDefault();
    // console.log(username);
    const response = await api.post("/devs", { username });
    console.log(response);
    const { _id } = response.data;
    history.push(`/dev/${_id}`);
  
  }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="TinderDev" />
        <input
          placeholder="Digite seu usuario do GitHub"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Logar</button>
      </form>
    </div>
  );
}
