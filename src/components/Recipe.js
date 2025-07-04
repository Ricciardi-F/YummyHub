


export function Recipe({ recipeObj, onSelectRecipeById, onToggleSidebar }) {

    function handleRecipeClick() {
        onSelectRecipeById(recipeObj.idMeal);
        if (onToggleSidebar) onToggleSidebar(false); //close the sidebar if it is open
    }

    return (
        <li onClick={handleRecipeClick} className="recipe-list-item">{recipeObj.strMeal}</li>
    );
}
