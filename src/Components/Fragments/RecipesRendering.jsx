import React from "react";

const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

export default function RecipesRendering() {
  return (
    <div className="mx-3">
      <h1 className="text-xl font-bold">Recipes</h1>
      <div>
        {recipes.map((recipes) => {
          return (
            <div
              key={recipes.id}
              className="mb-3 container px-3 py-2 w-full max-w-sm bg-slate-300 rounded-md"
            >
              <p>Food Name {recipes.name}</p>
              <p> Indgredient :</p>
              <ul>
                {recipes.ingredients.map((ingredients) => {
                  return <li key={ingredients}>{ingredients}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
