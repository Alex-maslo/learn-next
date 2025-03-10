import React from "react";
import { IRecipe } from "@/models/IRecipe";

const Recipe = ({ recipe }: { recipe: IRecipe }) => {
  return <div>{recipe.cuisine}</div>;
};

export default Recipe;
