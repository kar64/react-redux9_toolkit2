import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const DestinationFact = () => {
  const fact = useSelector((state) => state.destinationStore.destinationSelect);
 
  if (fact) {
    return (
      <div className="text-center border">
        <h1>{fact.name}</h1>
        <h3>{fact.fact}</h3>
        <br/>
        <h4>Days Recommened : {fact.days}</h4>
      </div>
    );
  } else {
    return null;
  }
};
