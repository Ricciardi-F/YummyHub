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
      <Header isDesktop={isDesktop} onMobileSidebar={setIsMobileSidebarOpen} >🍳 Ricette Facili</Header>
      <div className="container-fluid">
        <div className="row">
          {isDesktop && <SidebarDesktop onSetSelectedRecipe={setSelectedRecipe} />}
          {!isDesktop && isMobileSidebarOpen && <SidebarMobile onMobileSidebar={setIsMobileSidebarOpen} onSetSelectedRecipe={setSelectedRecipe} />}
          <MainContent selectedRecipe={selectedRecipe}></MainContent>
          <Footer>© 2025 App di Ricette - Realizzato con React</Footer>
        </div>
      </div>

    </>
  );
}



function Header({ isDesktop, onMobileSidebar, children }) {
  return (
    <header>
      <div className="header-title">
        <h1>{children}</h1>
        <p className="header-subtitle">
          Scegli una ricetta per iniziare!
        </p>
      </div>
      {!isDesktop &&
        <button className="header-menu-button" type="button" aria-label="Apri menu" onClick={() => onMobileSidebar(true)} >
          &#9776;
        </button>
      }
    </header>
  );
}


function SidebarDesktop({ onSetSelectedRecipe }) {
  return (
    <nav className="col-md-3 col-lg-2  sidebar-desktop">
      <RecipeList onSetSelectedRecipe={onSetSelectedRecipe}></RecipeList>
    </nav>
  );
}


function SidebarMobile({ onMobileSidebar, onSetSelectedRecipe }) {
  return (
    <div className="mobile-sidebar">
      <div className="mobile-sidebar-header">
        <h5 className="mb-0">Le Ricette</h5>
        <button type="button" className="mobile-sidebar-close" aria-label="Chiudi menu" onClick={() => onMobileSidebar(false)}>×</button>
      </div>
      <div className="offcanvas-body">
        <RecipeList onSetSelectedRecipe={onSetSelectedRecipe} onMobileSidebar={onMobileSidebar} ></RecipeList>
      </div>
    </div>
  );
}


function RecipeList({ onSetSelectedRecipe, onMobileSidebar }) {
  const { meals } = data;

  return (
    <ul className="recipe-list">
      {meals.map(item => (<Recipe key={item.idMeal}
        onSetSelectedRecipe={onSetSelectedRecipe}
        onMobileSidebar={onMobileSidebar}
        recipeObj={item}></Recipe>))}

    </ul>
  );
}


function Recipe({ recipeObj, onSetSelectedRecipe, onMobileSidebar }) {
  function handleRecipeClick() {
    onSetSelectedRecipe(recipeObj);
    if (onMobileSidebar) onMobileSidebar(false); //work only on mobile version
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
