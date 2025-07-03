import { useEffect, useState } from "react";
import defaultRecipe from './defaultRecipe.json';


function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
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
    const MAX_ITEMS = 10;
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



function Header({ isDesktop, onToggleSidebar, children }) {
  return (
    <header>
      <div className="header-title">
        <h1>{children}</h1>
        <p className="header-subtitle">
          Scegli una ricetta per iniziare!
        </p>
      </div>
      {!isDesktop &&
        <button className="header-menu-button" type="button" aria-label="Apri menu" onClick={() => onToggleSidebar(true)} >
          &#9776;
        </button>
      }
    </header>
  );
}

function Sidebar({ onGetRecipesRequest, recipes, onSelectRecipeById, isDesktop, isMobileSidebarOpen, onToggleSidebar }) {


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
          onToggleSidebar={onToggleSidebar}
        />}
    </>
  );
}

function SidebarMobile({ recipes, onSelectRecipeById, onToggleSidebar, onGetRecipesRequest }) {
  return (
    <div className="mobile-sidebar">
      <div className="mobile-sidebar-header">
        <SearchBar onGetRequest={onGetRecipesRequest}></SearchBar>
        <button type="button" className="mobile-sidebar-close" aria-label="Chiudi menu" onClick={() => onToggleSidebar(false)}>×</button>
      </div>
      <div className="offcanvas-body">
        <RecipeList recipes={recipes} onSelectRecipeById={onSelectRecipeById} onToggleSidebar={onToggleSidebar} ></RecipeList>
      </div>
    </div>
  );
}

// 3496610203

function SidebarDesktop({ onGetRecipesRequest, recipes, onSelectRecipeById }) {
  return (
    <nav className="col-md-2 col-lg-2 sidebar-desktop px-4">
      <SearchBar onGetRequest={onGetRecipesRequest}></SearchBar>
      <RecipeList recipes={recipes} onSelectRecipeById={onSelectRecipeById}></RecipeList>
    </nav>
  );
}





function SearchBar({ onGetRequest }) {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); //evita il reload della pagina al submit
    if (!searchValue.trim()) return;
    //chiamata fetch
    onGetRequest(searchValue.trim());
    setSearchValue(""); //reset searchBar
  }

  return (
    <form className="py-2 search-bar" role="search" onSubmit={e => handleSubmit(e)} aria-label="Cerca ricette">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Cerca ricetta..."
          aria-label="Cerca ricetta"
          name="search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" className="btn btn-custom-search" aria-label="Avvia ricerca">
          ►
        </button>
      </div>
    </form>
  );
}


function RecipeList({ recipes, onSelectRecipeById, onToggleSidebar }) {
  return (
    <ul className="recipe-list">
      {recipes.map(item => (
        <Recipe
          key={item.idMeal}
          onSelectRecipeById={onSelectRecipeById}
          onToggleSidebar={onToggleSidebar}
          recipeObj={item} />))}
    </ul>
  );
}


function Recipe({ recipeObj, onSelectRecipeById, onToggleSidebar }) {

  function handleRecipeClick() {
    onSelectRecipeById(recipeObj.idMeal);
    if (onToggleSidebar) onToggleSidebar(false); //close the sidebar if it is open
  }

  return (
    <li onClick={handleRecipeClick} className="recipe-list-item">{recipeObj.strMeal}</li>
  );
}

function getIngredients(recipe) {
  return Object.entries(recipe).filter(([k, v]) => k.startsWith("strIngredient") && v?.trim());
}
function getInstructions(recipe) {
  return recipe.strInstructions.split('.').map(i => i.trim()).filter(i => i.length > 0);
}

function MainContent({ selectedRecipe }) {
  if (!selectedRecipe) return (
    <main className="col-md-9 col-lg-10 content">
      <div className="recipe-card placeholder">
        <p>Seleziona una ricetta dal menu per iniziare!</p>
      </div>
    </main>
  );

  const name = selectedRecipe.strMeal;
  const category = selectedRecipe.strCategory;
  const area = selectedRecipe.strArea;
  const video = selectedRecipe.strYoutube;
  const image = selectedRecipe.strMealThumb;
  const ingredients = getIngredients(selectedRecipe);
  const instructions = getInstructions(selectedRecipe);

  return (
    <main className="col-md-9 col-lg-10 content">
      <div className="recipe-card">
        <h2>🍽️ {name}</h2>
        <p className="category-area">
          <strong>Categoria:</strong> {category} &nbsp;&nbsp;|&nbsp;&nbsp;
          <strong>Area:</strong> {area}
        </p>
        <p>
          {video && <a href={video} className="video-link"> 🎥 Guarda il video</a>}
        </p>

        <img src={image} alt={name} className="recipe-img" />
        <Ingredients ingredients={ingredients}></Ingredients>
        <Procedure instructions={instructions}></Procedure>
      </div>
    </main>
  );
}

function Ingredients({ ingredients }) {
  return (
    <>
      <h4>🥕 Ingredienti</h4>
      <ul>
        {ingredients.map(([key, value]) => <li key={key}>{value}</li>)}
      </ul>
    </>
  );
}

function Procedure({ instructions }) {
  return (
    <>
      <h4>🧑‍🍳 Preparazione</h4>
      <ul>
        {instructions.map(value => <li key={value}>{value}</li>)}
      </ul>
    </>
  );
}

function Footer({ children }) {
  return (
    <footer>
      <p>{children}</p>
    </footer>
  );
}



export default App;