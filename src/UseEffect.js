import UseEffectContent from './UseEffectContent';
import React, { useEffect, useState } from 'react';

function UseEffect() {
    const [show, setShow] = useState(true);

    function emitComment(id) {
        setInterval(() => {
            window.dispatchEvent(
                new CustomEvent(`lesson-${id}`, {
                    detail: `this is comment of lesson ${id}`,
                }),
            );
        }, 2000);
    }

    emitComment(1);
    emitComment(2);
    emitComment(3);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={() => setShow(!show)}>Click me</button>
            {show && <UseEffectContent />}
        </div>
    );
}

export default UseEffect;
