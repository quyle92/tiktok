import React, {
    useState,
    useEffect,
    useRef,
    useReducer,
    useMemo,
    memo,
    useCallback,
    useContext,
    useImperativeHandle,
    forwardRef,
} from 'react';
import mantra from '../videos/tiktok.mp4';
function Video(props, ref) {
    const videRef = useRef();
    useImperativeHandle(ref, () => ({
        play: () => {
            videRef.current.play();
        },

        pause: () => {
            videRef.current.pause();
        },
    }));
    return <video ref={videRef} src={mantra} width={300} />;
}

export default forwardRef(Video);
