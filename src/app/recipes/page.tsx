import React from "react";
import Recipe from "@/components/Recipe";
import { IRecipe } from "@/models/IRecipe";

const RecipesPage = async () => {
  const res = await fetch("http://localhost:3000/recipes/api");
  const recipes: IRecipe[] = await res.json();

  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesPage;
