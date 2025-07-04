import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarMobile } from "./SidebarMobile";

export function Sidebar({ onGetRecipesRequest, recipes, onSelectRecipeById, isDesktop, isMobileSidebarOpen, onToggleSidebar }) {


    return (
        <>
            {isDesktop &&
                <SidebarDesktop
                    recipes={recipes}
                    onSelectRecipeById={onSelectRecipeById}
                    onGetRecipesRequest={onGetRecipesRequest} />}
            {!isDesktop && isMobileSidebarOpen &&
                <SidebarMobile
                    recipes={recipes}
                    onSelectRecipeById={onSelectRecipeById}
                    onGetRecipesRequest={onGetRecipesRequest}
                    onToggleSidebar={onToggleSidebar} />}
        </>
    );
}
