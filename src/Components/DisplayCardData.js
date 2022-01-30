import React from "react";
import { CardData } from "./ToggerCard";

function DisplayCardData() {
  return (
    <div id="card-togger-data">
      <div className="card-header">
        <h3>Making transactions are easier, faster and cheaper now</h3>
        <span className="card-header">
          Leveraging the power of blockchain, you can now make transactions,{" "}
          <br />
          get returns and be unlimited with the transactions.
        </span>
      </div>
      <div className="toggle-grid">
        {CardData.map((CardData) => (
          <div className="card-data-info">
            <div className="togger-card-info">
              <div className="toggle-card">
                <img src={CardData.imageSrc} />
                <h3>{CardData.title}</h3>
                <span className="more-data">{CardData.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayCardData;
