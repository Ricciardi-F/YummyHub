import { RecipeList } from "./RecipeList";
import { SearchBar } from "./SearchBar";


export function SidebarDesktop({ handleSearchRecipes, recipes, onSelectRecipeById }) {
    return (
        <nav className="col-md-2 col-lg-2 sidebar-desktop px-4">
            <SearchBar onGetRequest={handleSearchRecipes}></SearchBar>
            <RecipeList recipes={recipes} onSelectRecipeById={onSelectRecipeById}></RecipeList>
        </nav>
    );
}
