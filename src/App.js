import Axios from "axios";
import { useState } from "react";
import "./App.css";
import Recipe from "./components/RecipeContainer/index";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [dropdown, setDropdown] = useState("vegan");
  // dropdown value is the health labels

  const YOUR_APP_ID = `1ca5dcdd`;
  const YOUR_APP_KEY = "08b8ef0ee94207b04772063655a5d9ca";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${dropdown}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    setquery("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          className="app-input"
          type="text"
          placeholder="Search ingredient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app-submit" type="submit" value="Search" />
        <select className="app-dropdown" className="app-healthcares">
          <option
            onClick={() => {
              setDropdown("vegan");
            }}
          >
            Vegan
          </option>
          <option
            onClick={() => {
              setDropdown("vegeterian");
            }}
          >
            vegeterian
          </option>
          <option
            onClick={() => {
              setDropdown("paleo");
            }}
          >
            Paleo
          </option>
          <option
            onClick={() => {
              setDropdown("peanut-free");
            }}
          >
            Peanut free
          </option>
          <option
            onClick={() => {
              setDropdown("gluten-free");
            }}
          >
            Gluten free
          </option>
        </select>
      </form>

      <div className="app-recipes">
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <Recipe recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;
