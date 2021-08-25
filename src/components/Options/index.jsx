import React from "react";

import "./styles.css";

const Options = (props) => {
  const options = [
    {
      text: "Ir al supermercado",
      handler: props.actionProvider.handleMarket,
      id: 1,
    },
    {
      text: "Visitar a la familia",
      handler: props.actionProvider.handleVisitFamily,
      id: 2,
    },

    {
      text: "Salir a pasear",
      handler: props.actionProvider.handlePark,
      id: 3,
    },
  ];

  const buttonMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonMarkup}</div>;
};

export default Options;
