export function IngredientList({ ingredients }) {
    return (
        <>
            <h4>🥕 Ingredienti</h4>
            <ul className="ingredient-list">
                {ingredients.map(([name, amount]) => (
                    <li key={name}>
                        <span className="ingredient-name">{name}</span>
                        <span className="ingredient-amount">{amount}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}
