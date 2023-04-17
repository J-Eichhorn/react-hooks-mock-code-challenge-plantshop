import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

useEffect(() => {
fetch('http://localhost:6001/plants')
.then(res => res.json())
.then(data => setPlantsList(data))
}, [])

const [plantsList, setPlantsList] = useState([])

function onFormSubmit(newPlant) {
  setPlantsList([...plantsList, newPlant])
}

const [plantSearch, setPlantSearch] = useState('')

function handleSearch(target) {
  setPlantSearch(target)
}

const filteredList = plantsList.filter((plant => {
  return plant.name.toLowerCase().includes(plantSearch.toLowerCase())
}))

  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit} />
      <Search handleSearch={handleSearch} />
      <PlantList plantsList={filteredList} />
    </main>
  );
}

export default PlantPage;
