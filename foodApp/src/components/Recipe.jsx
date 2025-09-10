import { useEffect, useState } from "react";
import styles from "./recipe.module.css";

export default function Recipe({ selectedID }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!selectedID) return;

    async function fetchRecipeByID() {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${selectedID}`);
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.log("Recipe cannot be taken:", err);
      }
    }

    fetchRecipeByID();
  }, [selectedID]); //Bu variable bi dizi!!!

  if (!selectedID) {
    return <div className={styles.infoScreen}>Choose a Recipe.</div>;
  }

  if (!recipe) {
    return <div className={styles.infoScreen}>Loading...</div>;
  }

  return (
    <div className={styles.Recipe}>
      <div className={styles.containerTop}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${recipe.image})` }}
        />

        <div className={styles.info}>
          <div className={styles.title}>{recipe.name}</div>
          <div className={styles.infoBottom}>
            <div className={styles.ingredients}>
              Ingredients
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </div>
            <div className={styles.shortInfo}>
              Short Infos
              <div className={styles.infoLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
                </svg>
                Cuisine:
                {recipe.cuisine}
              </div>
              <div className={styles.infoLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                  <path d="M16 16h5v5" />
                </svg>
                PrepTime:
                {recipe.prepTimeMinutes}
              </div>
              <div className={styles.infoLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6v6l4-2" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                cookTime
                {recipe.cookTimeMinutes}
              </div>
              <div className={styles.infoLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="M12 9v11" />
                  <path d="M2 9h13a2 2 0 0 1 2 2v9" />
                </svg>
                Servings:
                {recipe.servings}
              </div>
              <div className={styles.infoLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
                CaloriesPerServing:
                {recipe.caloriesPerServing}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerBottom}>
        Instructions:
        {recipe.instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </div>
    </div>
  );
}
