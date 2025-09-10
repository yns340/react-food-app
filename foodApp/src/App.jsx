import { AllRecipes } from "./components/AllRecipes.jsx";
import Recipe from "./components/Recipe.jsx";
import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const [selectedID, setID] = useState(null);

  return (
    <div className={styles.App}>
      <h1>MyRecipe</h1>
      <div className={styles.container}>
        <AllRecipes onSelect={setID} />
        <Recipe selectedID={selectedID} />
      </div>
    </div>
  );
}

export default App;
