import { cn } from "../../utils/cn";
import { useCover } from "./useCover";

interface CoverProps {
    children: React.ReactNode;
}

export default function Cover({ children }: CoverProps) {
    const { animation, darkTheme } = useCover();

    return (
        <>
            <span
                className={cn(
                    "w-full h-screen bg-white dark:bg-black dark:text-white opacity-100 flex justify-center items-center flex-col transition-all duration-700 delay-1000 fixed z-[2]",
                    animation && "opacity-0 invisible",
                    darkTheme && "dark",
                )}
            >
                <h2
                    className={cn(
                        "font-medium text-5xl transition-all max-sm:text-3xl",
                        animation && " -translate-y-10 opacity-0 duration-700",
                    )}
                >
                    Portfolio de David Fontes
                </h2>
                <h3
                    className={cn(
                        "text-4xl transition-all delay-300 max-sm:text-2xl",
                        animation && " -translate-y-10 opacity-0 duration-700",
                    )}
                >
                    Por favor beba <b className="text-blue ">água</b>
                </h3>
            </span>
            {children}
        </>
    );
}
