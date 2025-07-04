import { Instructions } from "./Instructions";
import { IngredientList } from "./IngredientList";
import { getIngredientAndAmounts, getInstructions } from "../utils/format";

export function MainContent({ selectedRecipe }) {
    if (!selectedRecipe) return (
        <main className="col-md-9 col-lg-10 content">
            <div className="recipe-card placeholder">
                <p>Select a recipe from the menu to begin!</p>
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
                    <strong>Category:</strong> {category} &nbsp;&nbsp;|&nbsp;&nbsp;
                    <strong>Region:</strong> {area}
                </p>
                <p>
                    {video && <a
                        href={video}
                        className="video-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        🎥 Watch video
                    </a>}
                </p>
                <img src={image} alt={name} className="recipe-img" />
                <IngredientList ingredients={ingredients}></IngredientList>
                <Instructions instructions={instructions}></Instructions>
            </div>
        </main>
    );
}
