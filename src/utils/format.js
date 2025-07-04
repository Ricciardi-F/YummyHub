
export function getIngredientAndAmounts(recipe) {
    const ingredients = Object.entries(recipe)
        .filter(([k, v]) => k.startsWith("strIngredient") && v?.trim());

    const measures = Object.entries(recipe)
        .filter(([k, v]) => k.startsWith("strMeasure") && v?.trim());

    // Return as array of [ingredient, measure] pairs for easier mapping in Ingredients component
    return ingredients.map(([_, ingredient], i) => [
        ingredient.trim(),
        measures[i]?.[1]?.trim() ?? ""
    ]);
} export function getInstructions(recipe) {
    return recipe.strInstructions.split('.').map(i => i.trim()).filter(i => i.length > 0);
}

