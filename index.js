import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

const particleCount = 50;
const body = document.body;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDelay = `${Math.random() * 5}s`;
  particle.style.animationDuration = `${5 + Math.random() * 5}s`;
  body.appendChild(particle);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
