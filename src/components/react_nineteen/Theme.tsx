import React, {createContext, type ReactNode, useContext, useState} from "react";
import Card from "./Card.tsx";

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light")
    
    const toggleTheme = () => {
        setTheme(prevState => (prevState === "light" ? "dark" : "light"));
    }
    
    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

const Theme = () => {
    return (
        <ThemeProvider>
            <Card/>
        </ThemeProvider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider")
    }
    return context;
}

export default Theme;