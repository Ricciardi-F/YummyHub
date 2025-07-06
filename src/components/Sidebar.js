import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarMobile } from "./SidebarMobile";

export function Sidebar({
  handleSearchRecipes,
  onSelectRecipeById,
  isDesktop,
  isMobileSidebarOpen,
  onToggleSidebar,
  children,
}) {
  return <>{children}</>;
}
