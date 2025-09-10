import { useState, useEffect } from "react";
import styles from "./allRecipes.module.css";
import ItemRecipes from "./ItemRecipes.jsx";

export function AllRecipes({ onSelect }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (err) {
        console.log("veri alınamadı:", err);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <div className={styles.AllRecipes}>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <ItemRecipes
          key={recipe.id}
          name={recipe.name}
          image={recipe.image}
          rating={recipe.rating}
          tags={recipe.tags}
          difficulty={recipe.difficulty}
          onClick={() => onSelect(recipe.id)}
        /> //Buradaki onClick sadece aktarma için bi variable
      ))}
    </div>
  );
}
