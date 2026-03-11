import { useEffect, useState } from "react";
import { useDarkTheme } from "../../store/useDarkTema";

export function useCover() {
    const [animation, setAnimation] = useState<boolean>(false);
    const { darkTheme } = useDarkTheme();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const timerAnimation = setTimeout(() => {
            setAnimation(true);
            document.body.style.overflow = "";
        }, 500);

        return () => {
            clearTimeout(timerAnimation);
            document.body.style.overflow = "";
        };
    }, [setAnimation]);

    return { animation, darkTheme };
}
