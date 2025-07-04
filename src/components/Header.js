export function Header({ isDesktop, onToggleSidebar, children }) {
    return (
        <header>
            <div className="header-title">
                <h1>{children}</h1>
                <p className="header-subtitle">
                    Choose a recipe to get started!
                </p>
            </div>
            {!isDesktop &&
                <button className="header-menu-button" type="button" aria-label="Open menu" onClick={() => onToggleSidebar(true)}>
                    &#9776;
                </button>}
        </header>
    );
}
