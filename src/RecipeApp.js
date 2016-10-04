import React from "react";
import SearchField from "./SearchField"
import RecipeCard from "./RecipeCard"

export default class RecipeApp extends React.Component{
  constructor(){
    super()
    this.state = {
      recipe: {
        name: "Croque Madame",
        levelOfDifficulty: 2,
        ingredients: ["Cheese", "Bread", "Tomato"]
      }
    }
    this.loadRecipe = this.loadRecipe.bind(this)
  }



  loadRecipe(dish){
    var url = `http://api.giphy.com/v1/gifs/search?q=${dish}&api_key=dc6zaTOxFJmzC`
    var url2 = `http://www.recipepuppy.com/api/?q=${dish}`
    var url3 = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json'
    var request = new Request('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3', {
      'mode': 'no-cors'
    })

    fetch(request).then(response=>
      response.json()).then(data => console.log(data) )


    //make api request
    //format data
  }
  render(){
    return (
    <div>
      <SearchField loadRecipe={this.loadRecipe} />
      <RecipeCard recipe={this.state.recipe}/>
    </div>
  )
  }
}

//1. Get user input from form to main component
    //i. need to send it up by changing its state????
//2. Make api request (fetch?) with that data (in main component)
//3.want to format whatever data is returned from request
//4. Send data down to RecipeCard as props by setting state
//5. Rerender page (this should happen automatically)
//6. Stretch goal > search by ingredients as well
