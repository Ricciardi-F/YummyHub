
function App() {
  return (
    <>
      <Header>Ricettario React</Header>
      <div class="container-fluid">
        <div class="row">
          <SidebarDesktop></SidebarDesktop>
          <MainContent></MainContent>
          <Footer>© 2025 App di Ricette - Realizzato con React</Footer>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    </>
  );
}

function Header({ children }) {
  return (
    <header>
      <h1>{children}</h1>
      <button class="btn-burger d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar" aria-label="Apri menu">
        &#9776;
      </button>
    </header>
  );
}

function SidebarDesktop() {
  return (
    <nav class="col-md-3 col-lg-2 d-none d-md-block sidebar">
      <ul class="list-group list-group-flush">
        <li class="list-group-item active">Pasta alla Carbonara</li>
        <li class="list-group-item">Chicken Tikka Masala</li>
        <li class="list-group-item">Sushi</li>
        <li class="list-group-item">Tiramisù</li>
      </ul>
    </nav>
  );
}

function SidebarMobile() {
  return (
    <div class="offcanvas offcanvas-start d-md-none" tabindex="-1" id="mobileSidebar"
      aria-labelledby="mobileSidebarLabel">
      <div class="offcanvas-header">
        <h5 id="mobileSidebarLabel" class="mb-0">Le Ricette</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
          aria-label="Chiudi menu"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Pasta alla Carbonara</li>
          <li class="list-group-item">Chicken Tikka Masala</li>
          <li class="list-group-item">Sushi</li>
          <li class="list-group-item">Tiramisù</li>
        </ul>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <main class="col-md-9 col-lg-10 content">
      <div class="recipe-card">
        <h2>Pasta alla Carbonara</h2>
        <p class="category-area">
          <strong>Categoria:</strong> Pasta &nbsp;&nbsp;|&nbsp;&nbsp;
          <strong>Area:</strong> Italia
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=3AAdKl1UYZs" target="_blank" class="video-link">Guarda il video su
            YouTube</a>
        </p>

        <img src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg" alt="Pasta alla Carbonara"
          class="recipe-img" />

        <h4>Ingredienti</h4>
        <ul>
          <li>200g spaghetti</li>
          <li>100g pancetta</li>
          <li>2 uova</li>
          <li>50g pecorino</li>
          <li>Pepe nero q.b.</li>
        </ul>

        <h4>Preparazione</h4>
        <ol>
          <li>Cuoci la pasta al dente.</li>
          <li>Rosola la pancetta in padella.</li>
          <li>Sbatti le uova con il pecorino e pepe.</li>
          <li>Scola la pasta e uniscila alla pancetta.</li>
          <li>Fuori dal fuoco, aggiungi il mix di uova e mescola bene.</li>
        </ol>
      </div>
    </main>
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
