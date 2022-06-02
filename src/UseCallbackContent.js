import React, { useState, useEffect, memo } from 'react';

function UseCallbackContent({ onIncrease }) {
    // console.log('UseCallbackContent')
    return (
        <>
            <h1>Hello world</h1>
            <button onClick={onIncrease}>Click me!</button>
        </>
    );
}

export default memo(UseCallbackContent);
