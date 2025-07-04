import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarMobile } from "./SidebarMobile";

export function Sidebar({ handleSearchRecipes, recipes, onSelectRecipeById, isDesktop, isMobileSidebarOpen, onToggleSidebar }) {

    return (
        <>
            {isDesktop &&
                <SidebarDesktop
                    recipes={recipes}
                    onSelectRecipeById={onSelectRecipeById}
                    handleSearchRecipes={handleSearchRecipes} />}
            {!isDesktop && isMobileSidebarOpen &&
                <SidebarMobile
                    recipes={recipes}
                    onSelectRecipeById={onSelectRecipeById}
                    handleSearchRecipes={handleSearchRecipes}
                    onToggleSidebar={onToggleSidebar} />}
        </>
    );
}
