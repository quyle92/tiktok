import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();
//custom hook
export function useTheme() {
    return useContext(ThemeContext)
}
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;