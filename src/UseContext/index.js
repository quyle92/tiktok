import ThemeProvider, { useThemeUpdate } from './ThemeContext';
import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext } from 'react';
import Content from './Content';
require('./App.css');

export default function App() {
    return (
        <ThemeProvider>
            <UseContext />
        </ThemeProvider>
    );
}

function UseContext() {
    const toggleTheme = useThemeUpdate();
    return (
        <div style={{ padding: 20 }}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Content></Content>
        </div>
    );
}
