import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext} from "react";
import { ThemeContext, useTheme } from './ThemeContext'

export default function Paragraph() {
    const theme = useTheme();
    return (
        <p className={theme}>
            Next, we will extract a UserInfo component that renders an Avatar next to the user’s name:
        </p>
    )
}