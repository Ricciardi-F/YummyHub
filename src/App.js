import { useEffect, useState } from "react";
import recipes from "./ricette.json"

function App() {
  const getIsDesktop = () => window.innerWidth > 768;
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);


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
          {/* {isDesktop ? <SidebarDesktop /> : (isMobileSidebarOpen && <SidebarMobile onMobileSidebar={setIsMobileSidebarOpen} />)} */}
          {isDesktop && <SidebarDesktop />}
          {!isDesktop && isMobileSidebarOpen && <SidebarMobile onMobileSidebar={setIsMobileSidebarOpen} />}
          <MainContent></MainContent>
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


function SidebarDesktop() {
  return (
    <nav className="col-md-3 col-lg-2  sidebar-desktop">
      <RecipeList></RecipeList>
    </nav>
  );
}


function SidebarMobile({ onMobileSidebar }) {
  return (
    <div className="mobile-sidebar">
      <div className="mobile-sidebar-header">
        <h5 className="mb-0">Le Ricette</h5>
        <button type="button" className="mobile-sidebar-close" aria-label="Chiudi menu" onClick={() => onMobileSidebar(false)}>×</button>
      </div>
      <div className="offcanvas-body">
        <RecipeList></RecipeList>
      </div>
    </div>
  );
}


function RecipeList() {
  return (
    <ul className="recipe-list">
      <Recipe>Pasta alla Carbonara</Recipe>
      <Recipe>Chicken Tikka Masala</Recipe>
      <Recipe>Sushi</Recipe>
      <Recipe>Tiramisù</Recipe>
    </ul>
  );
}


function Recipe({ children }) {
  return (
    <li className="recipe-list-tem">{children}</li>
  );
}


function MainContent() {
  return (
    <main className="col-md-9 col-lg-10 content">
      <div className="recipe-card">
        <h2>🍽️ Pasta alla Carbonara</h2>
        <p className="category-area">
          <strong>Categoria:</strong> Pasta &nbsp;&nbsp;|&nbsp;&nbsp;
          <strong>Area:</strong> Italia
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=3AAdKl1UYZs" className="video-link"> 🎥 Guarda il video</a>
        </p>

        <img src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg" alt="Pasta alla Carbonara"
          className="recipe-img" />

        <Ingredients></Ingredients>
        <Procedure></Procedure>


      </div>
    </main>
  );
}

function Ingredients() {
  return (
    <>
      <h4>🥕 Ingredienti</h4>
      <ul>
        <li>200g spaghetti</li>
        <li>100g pancetta</li>
        <li>2 uova</li>
        <li>50g pecorino</li>
        <li>Pepe nero q.b.</li>
      </ul>
    </>
  );
}

function Procedure() {
  return (
    <>
      <h4>🧑‍🍳 Preparazione</h4>
      <ol>
        <li>Cuoci la pasta al dente.</li>
        <li>Rosola la pancetta in padella.</li>
        <li>Sbatti le uova con il pecorino e pepe.</li>
        <li>Scola la pasta e uniscila alla pancetta.</li>
        <li>Fuori dal fuoco, aggiungi il mix di uova e mescola bene.</li>
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
