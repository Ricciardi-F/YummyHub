


export function Procedure({ instructions }) {
    return (
        <>
            <h4>🧑‍🍳 Preparazione</h4>
            <ul>
                {instructions.map(value => <li key={value}>{value}</li>)}
            </ul>
        </>
    );
}
