import { useEffect, useState } from "react";
import defaultRecipe from './defaultRecipe.json';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";



function useIsDesktop() {
  const MIN_WIDTH = 768;
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > MIN_WIDTH);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > MIN_WIDTH);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(defaultRecipe);
  const [recipes, setRecipes] = useState([]);


  const isDesktop = useIsDesktop();

  async function fetchRecipeById(id) {
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error(response.status);

      const data = await response.json();

      setSelectedRecipe(data.meals[0]);
    } catch (error) {
      console.error("Errore nella fetch:", error);
    }
  }

  async function fetchRecipesFromAllSources(searchValue) {
    const MAX_ITEMS = 20;
    const baseUrl = "https://www.themealdb.com/api/json/v1/1";

    const urls = [
      `${baseUrl}/filter.php?i=${searchValue}`,
      `${baseUrl}/search.php?s=${searchValue}`,
      `${baseUrl}/filter.php?c=${searchValue}`,
    ];

    try {
      const responses = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      );

      // Unisci tutti i risultati filtrando quelli null
      const allMeals = responses.flatMap((res) => res.meals || []);

      // Elimina duplicati usando una Map (alternativa a Set per oggetti)
      const dedupedMeals = Array.from(
        new Map(allMeals.map((m) => [m.idMeal, m])).values()
      );

      // Limita e aggiorna
      setRecipes(dedupedMeals.slice(0, MAX_ITEMS));
    } catch (err) {
      console.error("Errore nella fetch multipla:", err);
      setRecipes([]);
    }
  }

  return (
    <>
      <Header isDesktop={isDesktop} onToggleSidebar={setIsMobileSidebarOpen} >🍳 Ricette Facili</Header>
      <div className="container-fluid">
        <div className="row">

          <Sidebar isDesktop={isDesktop}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onToggleSidebar={setIsMobileSidebarOpen}
            onGetRecipesRequest={fetchRecipesFromAllSources}
            recipes={recipes}
            onSelectRecipeById={fetchRecipeById}
          />

          <MainContent selectedRecipe={selectedRecipe}></MainContent>
        </div>
        <Footer>© 2025 App di Ricette - Realizzato con React</Footer>

      </div>

    </>
  );
}




export default App;