const BASE_URL = process.env.REACT_APP_API_URL;

export async function fetchRecipeById(id) {
    const url = `${BASE_URL}/lookup.php?i=${id}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(response.status);
    const data = await response.json();
    return data.meals[0];
}


export async function fetchRecipesFromAllSources(searchValue, maxItems = 20) {
    const urls = [
        `${BASE_URL}/filter.php?i=${searchValue}`,
        `${BASE_URL}/search.php?s=${searchValue}`,
        `${BASE_URL}/filter.php?c=${searchValue}`,
    ];

    const responses = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
    );

    const allMeals = responses.flatMap((res) => res.meals || []);
    const dedupedMeals = Array.from(
        new Map(allMeals.map((meal) => [meal.idMeal, meal])).values()
    );

    return dedupedMeals.slice(0, maxItems);
}