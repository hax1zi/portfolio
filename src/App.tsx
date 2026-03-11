import { useEffect } from "react";
import { useDarkTheme } from "./store/useDarkTema";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import LeadingPage from "./pages/LeadingPage";
import Cover from "./pages/Cover/Cover";

function App() {
    const { darkTheme } = useDarkTheme();

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", darkTheme === null ? false : darkTheme);
    }, [darkTheme]);

    return (
        <Cover>
            <Header />
            <HeaderMobile />
            <LeadingPage />
        </Cover>
    );
}

export default App;
