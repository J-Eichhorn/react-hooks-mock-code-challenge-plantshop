import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsList}) {

const renderPlantsList = plantsList.map((plant) => {
  return <PlantCard key={plant.name} plant={plant} />
})


  return (
    <ul className="cards">{renderPlantsList}</ul>
  );
}

export default PlantList;
