import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext } from "react";
import Video from "./Video";

export default function App() {
    const videoRef = useRef();
    const handlePlay = () => videoRef.current.play()
    const handlePause = () => videoRef.current.pause()

    return (
        <>
            <Video ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </>
    )
}