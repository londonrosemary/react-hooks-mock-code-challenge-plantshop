import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [fetchSwitch, setFetchSwitch] = useState(false)
  const [plants, setPlants] = useState([])
  const [searchBar, setSearchBar] = useState("")
  
  useEffect(()=>{
    fetchPlants()
  } 
  ,[fetchSwitch])

  function fetchPlants(){
    fetch("http://localhost:6001/plants")
      .then(resp=>resp.json())
      .then(data=>setPlants(data))
  }

  function postFormData(newPlant){
    fetch("http://localhost:6001/plants",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(
      console.log("New plant posted!"),
      setFetchSwitch(!fetchSwitch))
  }

  const filteredPlants= plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchBar.toLowerCase())
  )

  return (
    <main>
      <NewPlantForm postFormData={postFormData}/>
      <Search searchBar={searchBar} setSearchBar={setSearchBar}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
