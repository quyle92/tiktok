import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext, useImperativeHandle, forwardRef, useTransition } from "react";
import images from "~/assets/images";

function Image({ src, fallback = images.noImage, ...props }, ref) {
    const [_fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(fallback)
    }

    return (
        <img
            ref={ref}
            src={_fallback || src}
            {...props}
            onError={handleError}
        />
    );
}

export default memo(forwardRef(Image));