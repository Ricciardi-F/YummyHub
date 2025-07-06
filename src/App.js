import { useState } from "react";
import defaultRecipe from "./defaultRecipe.json";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { fetchRecipeById, fetchRecipesFromAllSources } from "./utils/apis";
import { useIsDesktop } from "./utils/useIsDesktop";
import { SidebarDesktop } from "./components/SidebarDesktop";
import { SidebarMobile } from "./components/SidebarMobile";
import { RecipeList } from "./components/RecipeList";
import { SearchBar } from "./components/SearchBar";

function App() {
  const isDesktop = useIsDesktop();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(defaultRecipe);
  const [recipes, setRecipes] = useState([defaultRecipe]);

  async function handleSelectRecipe(id) {
    try {
      const recipe = await fetchRecipeById(id);
      setSelectedRecipe(recipe);
    } catch (err) {
      console.error("Error loading recipe:", err);
    }
  }

  async function handleSearch(searchValue) {
    try {
      const results = await fetchRecipesFromAllSources(searchValue);
      setRecipes(results);
    } catch (err) {
      console.error("Search error:", err);
      setRecipes([]);
    }
  }

  function renderSidebarDesktop() {
    return (
      <SidebarDesktop>
        <SearchBar onGetRequest={handleSearch} />
        <RecipeList recipes={recipes} onSelectRecipeById={handleSelectRecipe} />
      </SidebarDesktop>
    );
  }

  return (
    <>
      <Header isDesktop={isDesktop} onToggleSidebar={setIsMobileSidebarOpen}>
        🍳 YummyHub
      </Header>
      <div className="container-fluid">
        <div className="row">
          {isDesktop && renderSidebarDesktop()}
          {!isDesktop && isMobileSidebarOpen && (
            <SidebarMobile onToggleSidebar={setIsMobileSidebarOpen}>
              <SearchBar onGetRequest={handleSearch}></SearchBar>
              <RecipeList
                recipes={recipes}
                onSelectRecipeById={handleSelectRecipe}
                onToggleSidebar={setIsMobileSidebarOpen}
              ></RecipeList>
            </SidebarMobile>
          )}
          <MainContent selectedRecipe={selectedRecipe}></MainContent>
        </div>
        <Footer>© 2025 Recipe App – Built with React</Footer>
      </div>
    </>
  );
}

export default App;
