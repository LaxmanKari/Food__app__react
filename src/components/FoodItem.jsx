import { IMG_CON_URL } from "../constants";

const FoodItem = ({item}) => {
   console.log("item in food item comp", item)
   return (
      <div className="p-5 m-5 bg-slate-400">
         <h1>Name: {item}</h1>
         <img></img>
         <h3>Description: "Yummy food, chilled food"</h3>
         <h4>price:100</h4>
      </div>
   ) 
}

export default FoodItem; 