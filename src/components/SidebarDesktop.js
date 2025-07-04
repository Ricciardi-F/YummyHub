import { RecipeList } from "./RecipeList";
import { SearchBar } from "./SearchBar";




export function SidebarDesktop({ onGetRecipesRequest, recipes, onSelectRecipeById }) {
    return (
        <nav className="col-md-2 col-lg-2 sidebar-desktop px-4">
            <SearchBar onGetRequest={onGetRecipesRequest}></SearchBar>
            <RecipeList recipes={recipes} onSelectRecipeById={onSelectRecipeById}></RecipeList>
        </nav>
    );
}
