import { Procedure } from "./Procedure";
import { IngredientList } from "./IngredientList";
import { getIngredientAndAmounts, getInstructions } from "../utils/format";

export function MainContent({ selectedRecipe }) {
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
    const ingredients = getIngredientAndAmounts(selectedRecipe);
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
                    {video && <a
                        href={video}
                        className="video-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        🎥 Guarda il video
                    </a>}
                </p>
                <img src={image} alt={name} className="recipe-img" />
                <IngredientList ingredients={ingredients}></IngredientList>
                <Procedure instructions={instructions}></Procedure>
            </div>
        </main>
    );
}
