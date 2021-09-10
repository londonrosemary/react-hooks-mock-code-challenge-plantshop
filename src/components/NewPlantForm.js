import React, {useState} from "react";

function NewPlantForm({postFormData}) {
  const [formData, setFormData] = useState({
    name: "",
    image:"",
    price: ""
  })

  function handleSubmitForm(e){
    console.log("submitted")
    e.preventDefault();
    const newPlant = {...formData, price:parseInt(formData.price)}
    postFormData(newPlant);
    setFormData({
      name:"",
      image:"",
      price:""
    })
    console.log("Form reset")
  } 

  function handleFormChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmitForm} >
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleFormChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleFormChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleFormChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
