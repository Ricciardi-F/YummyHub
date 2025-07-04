export function Instructions({ instructions }) {
    return (
        <>
            <h4>🧑‍🍳 Instructions</h4>
            <ul>
                {instructions.map(value => <li key={value}>{value}</li>)}
            </ul>
        </>
    );
}
