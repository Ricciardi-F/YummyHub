import { useEffect, useState } from "react";

export function useIsDesktop() {
    const MIN_WIDTH = 768;
    const [isDesktop, setIsDesktop] = useState(() => window.innerWidth > MIN_WIDTH);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > MIN_WIDTH);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isDesktop;
}

