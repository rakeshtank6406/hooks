import React from "react";

const StepCard = (props) => {
  return (
      <div className="stepCard">
        <img src={props.data.i} alt="step" />
        <h1>{props.data.step}</h1>
        <p>{props.data.para}</p>
      </div>
  );
};

export default StepCard;
