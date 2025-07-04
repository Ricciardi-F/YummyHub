import { useState } from "react";
import defaultRecipe from './defaultRecipe.json';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";
import { fetchRecipeById, fetchRecipesFromAllSources } from "./utils/apis";
import { useIsDesktop } from "./utils/useIsDesktop";


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
      console.error("Errore nel caricamento ricetta:", err);
    }
  }

  async function handleSearch(searchValue) {
    try {
      const results = await fetchRecipesFromAllSources(searchValue);
      setRecipes(results);
    } catch (err) {
      console.error("Errore nella ricerca:", err);
      setRecipes([]);
    }
  }


  return (
    <>
      <Header isDesktop={isDesktop} onToggleSidebar={setIsMobileSidebarOpen} >🍳 YummyHub</Header>
      <div className="container-fluid">
        <div className="row">
          <Sidebar isDesktop={isDesktop}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onToggleSidebar={setIsMobileSidebarOpen}
            handleSearchRecipes={handleSearch}
            recipes={recipes}
            onSelectRecipeById={handleSelectRecipe}
          />
          <MainContent selectedRecipe={selectedRecipe}></MainContent>
        </div>
        <Footer>© 2025 Recipe App – Built with React</Footer>
      </div>
    </>
  );
}


export default App;