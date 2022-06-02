import React, { useState, useEffect } from 'react';
import UseRefContent from './UseRefContent';
export default function UseRef() {
    const [isShow, setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow(!isShow)}> Toggle</button>
            {isShow && <UseRefContent />}
        </div>
    );
}
