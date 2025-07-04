import { Recipe } from "./Recipe";

export function RecipeList({ recipes, onSelectRecipeById, onToggleSidebar }) {
    if (recipes.length === 0) return (
        <p className="no-result-text">No results found.</p>
    );

    return (
        <ul className="recipe-list">
            {recipes.map(item => (
                <Recipe
                    key={item.idMeal}
                    onSelectRecipeById={onSelectRecipeById}
                    onToggleSidebar={onToggleSidebar}
                    recipeObj={item} />))}
        </ul>
    );
}
