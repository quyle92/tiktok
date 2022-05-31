import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext} from "react";
import StoreContext from './Context';

export function useProvider() {
    const [state, dispatch] = useContext(StoreContext);
    return [state, dispatch];
}
