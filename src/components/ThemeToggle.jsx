import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark"){
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }

    }, [])

    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    }

    return <button onClick={toggleTheme} className={cn("fixed max-sm:top-20 max-sm:z-50 max-sm:right-8 top-5 right-5 z-60 p-2 rounded-full transition-colors sm:block md:block duration-300","focus:outlin-hidden")}> {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}</button>
};