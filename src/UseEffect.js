import Content from './Content';
import React, {useEffect, useState} from 'react';

function UseEffect() {
    const [show, setShow] = useState(true);


    return (
        <div style={{padding: 20}}>
            <button onClick={() => setShow(!show)}>Click me</button>
            {show && <Content />}
        </div>
    )
}

export default UseEffect