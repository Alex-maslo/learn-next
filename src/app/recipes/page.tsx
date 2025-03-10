import React from "react";
import { IUs } from "@/models/IUs";

const RecipesPage = async () => {
  const res = await fetch("http://localhost:3000/recipes/api");
  // const recipes: IRecipe[] = await res.json();

  const users: IUs[] = await res.json();

  return (
    <div>
      {/*{recipes.map((recipe) => (*/}
      {/*  <Recipe key={recipe.id} recipe={recipe} />*/}
      {/*))}*/}

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default RecipesPage;
