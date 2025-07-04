import { Recipe } from "./Recipe";




export function RecipeList({ recipes, onSelectRecipeById, onToggleSidebar }) {
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
