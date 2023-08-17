import React from "react";
import { useState, useEffect } from 'react';
import classes from './Filter.module.css';



function Filter() {
  const [meals, setMeals] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); 
  const [selectedImage, setSelectedImage] = useState(null); 

  useEffect(() => {
    fetchMeals(); 
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        "https://food-app-890fa-default-rtdb.firebaseio.com/meals.json"
      ); 
      const data = await response.json();

      const loadedMeals = [];

      setMeals(loadedMeals);
     for ( const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
     } // Set the received data as options
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue); 
    const selected = meals.find(
      (meal) => meal.name === selectedValue
    );
    setSelectedImage(selected?.url); 
  };

  return (
    <div className={classes.container}>
      <h3>Select</h3>
      <select className={classes['my-select']} onChange={handleOptionChange}>
        <option value="">
        Select your food
         </option>
        {meals.map((meal) => (
          <option key={meal.id} value={meal.name}>
            {meal.name}
          </option>
        ))}
      </select>

      {selectedImage && (
        <img
          className={classes['my-image']}
          src={selectedImage}
          alt={selectedOption}
          style={{
            marginTop: "20px",
            display: "block",
            maxWidth: "100%",
          }}
        />
      )}
    </div>
  );
}

export default Filter;

    

