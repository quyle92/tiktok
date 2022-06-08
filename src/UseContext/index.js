import ThemeProvider, { useThemeUpdate } from './ThemeContext';
import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext } from 'react';
import Content from './Content';
// eslint-disable-next-line no-undef
require('./App.css');

function UseContext() {
    const toggleTheme = useThemeUpdate();
    return (
        <div style={{ padding: 20 }}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Content></Content>
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <UseContext />
        </ThemeProvider>
    );
}
