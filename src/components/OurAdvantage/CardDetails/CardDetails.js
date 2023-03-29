import React from "react";
import "./_cardDetails.scss";
export default function CardDetails({ title }) {
  return (
    <div className="main">
      <div className="container">
        <h1>{title.label}</h1>
        <p>{title.description}</p>
      </div>
    </div>
  );
}
