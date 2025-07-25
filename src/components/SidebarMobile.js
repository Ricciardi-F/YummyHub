import { SearchBar } from "./SearchBar";
import { RecipeList } from "./RecipeList";


export function SidebarMobile({ recipes, onSelectRecipeById, onToggleSidebar, handleSearchRecipes }) {
    return (
        <div className="mobile-sidebar">
            <div className="mobile-sidebar-header">
                <SearchBar onGetRequest={handleSearchRecipes}></SearchBar>
                <button type="button" className="mobile-sidebar-close" aria-label="Close menu" onClick={() => onToggleSidebar(false)}>×</button>
            </div>
            <div className="offcanvas-body">
                <RecipeList recipes={recipes} onSelectRecipeById={onSelectRecipeById} onToggleSidebar={onToggleSidebar}></RecipeList>
            </div>
        </div>
    );
}
