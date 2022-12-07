import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios'
import Drinks from "./Drinks";

export default function DrinksList(){
    const [drinks, setDrinks] = useState([])
    const addDrink = useCallback(async () => {
    
           const response = await  axios('https://www.thecocktaildb.com/api/json/v1/1/random.php')
           setDrinks(oldList => [...oldList, 
            { name: response.data.drinks[0].strDrink,
                url: response.data.drinks[0].strDrinkThumb
            }])
           console.log(response.data.drinks[0])
        
    })
    return <div>
        <button onClick={addDrink}>Add Drink!</button>    
        {drinks.map((drink,index) => {
            return <Drinks
                key={index}
                name={drink.name}
                url={drink.url}
            />
        })}
        
    </div>
}