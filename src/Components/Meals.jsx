// import { useEffect } from "react";
// import { useState } from "react";
import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

const requestConfig = {};
export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     // try{
  //     const response = await fetch("http://localhost:3000/meals");
  //     // }
  //     // catch(error){

  //     // }
  //     if (!response.ok) {
  //     }

  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }
  //   fetchMeals();
  // }, []);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals" , requestConfig , []);

  if(isLoading){
    return <p>Fetching meals...</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
