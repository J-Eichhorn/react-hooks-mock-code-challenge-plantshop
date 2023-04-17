import React, {useState} from "react";

function NewPlantForm({onFormSubmit}) {

const [plantName, setPlantName] = useState('')
const [plantImage, setPlantImage] = useState('')
const [plantPrice, setPlantPrice] = useState('')

function handleSubmit(e){
 e.preventDefault()
 fetch('http://localhost:6001/plants', {
  method: 'POST',
  headers: {
    'content-type' : 'application/json'
  },
  body: JSON.stringify({
    name: plantName,
    image: plantImage,
    price: plantPrice
  })
 })
 .then(res => res.json())
 .then(data => onFormSubmit(data))
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setPlantName(e.target.value)} value={plantName} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => setPlantImage(e.target.value)} value={plantImage} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => setPlantPrice(parseFloat(e.target.value))} value={plantPrice} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
