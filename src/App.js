import { useEffect, useState } from "react";
import data from "./ricette.json"

function App() {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > 768);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);



  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 768);
    }

    // Aggiungo il listener per il resize
    window.addEventListener('resize', handleResize);
    // Pulisco il listener quando il componente si smonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <Header isDesktop={isDesktop} onToggleSidebar={setIsMobileSidebarOpen} >🍳 Ricette Facili</Header>
      <div className="container-fluid">
        <div className="row">
          {isDesktop && <SidebarDesktop onSetSelectedRecipe={setSelectedRecipe} />}
          {!isDesktop && isMobileSidebarOpen && <SidebarMobile onToggleSidebar={setIsMobileSidebarOpen} onSetSelectedRecipe={setSelectedRecipe} />}
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


function SidebarDesktop({ onSetSelectedRecipe }) {
  return (
    <nav className="col-md-2 col-lg-2 sidebar-desktop px-4">
      <SearchBar></SearchBar>
      <RecipeList onSetSelectedRecipe={onSetSelectedRecipe}></RecipeList>
    </nav>
  );
}




function SidebarMobile({ onToggleSidebar, onSetSelectedRecipe }) {
  return (
    <div className="mobile-sidebar">
      <div className="mobile-sidebar-header">
        <SearchBar></SearchBar>
        <button type="button" className="mobile-sidebar-close" aria-label="Chiudi menu" onClick={() => onToggleSidebar(false)}>×</button>
      </div>
      <div className="offcanvas-body">
        <RecipeList onSetSelectedRecipe={onSetSelectedRecipe} onToggleSidebar={onToggleSidebar} ></RecipeList>
      </div>
    </div>
  );
}


function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); //evita il reload della pagina al submit
    setSearchValue(""); //reset searchBar
  }

  return (
    <form className="py-2 search-bar" role="search" onSubmit={handleSubmit} aria-label="Cerca ricette">
      <div className="input-group">
        <input
          type="search"
          class="form-control"
          placeholder="Cerca ricetta..."
          aria-label="Cerca ricetta"
          name="search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          autocomplete="off"
        />
        <button class="btn btn-custom-search" aria-label="Avvia ricerca">
          ►
        </button>
      </div>
    </form>
  );
}


function RecipeList({ onSetSelectedRecipe, onToggleSidebar }) {
  const { meals } = data;

  return (
    <ul className="recipe-list">
      {meals.map(item => (<Recipe key={item.idMeal}
        onSetSelectedRecipe={onSetSelectedRecipe}
        onToggleSidebar={onToggleSidebar}
        recipeObj={item}></Recipe>))}

    </ul>
  );
}


function Recipe({ recipeObj, onSetSelectedRecipe, onToggleSidebar }) {

  function handleRecipeClick() {
    onSetSelectedRecipe(recipeObj);
    if (onToggleSidebar) onToggleSidebar(false); //close the sidebar if it is open
  }

  return (
    <li onClick={() => handleRecipeClick()} className="recipe-list-item">{recipeObj.strMeal}</li>
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
        <Ingredients dataArray={ingredients}></Ingredients>
        <Procedure dataArray={instructions}></Procedure>
      </div>
    </main>
  );
}

function Ingredients({ dataArray }) {
  return (
    <>
      <h4>🥕 Ingredienti</h4>
      <ul>
        {dataArray.map(([key, value]) => <li key={key}>{value}</li>)}
      </ul>
    </>
  );
}

function Procedure({ dataArray }) {
  return (
    <>
      <h4>🧑‍🍳 Preparazione</h4>
      <ol>
        {dataArray.map(value => <li key={value}>{value}</li>)}
      </ol>
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
