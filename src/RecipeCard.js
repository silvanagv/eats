import React from 'react';

export default (props) => {
   return(
     <div>
      <h1> {props.recipe.name} </h1>
      <h3> Level of Difficulty: {props.recipe.levelOfDifficulty} </h3>
      <ul>
        {props.recipe.ingredients.map((ingredient) => {return <li> {ingredient} </li>})}
      </ul>
     </div>
   )
}
