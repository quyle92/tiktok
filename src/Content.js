import { useState, useEffect } from 'react';
import _find from 'lodash/find';

const tabs = ['posts', 'comments', 'albums'];
var tabData = [];

function Content() {
    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);
    const [tabSelected, setTabSelected] = useState('posts');
    const [isShown, setIsShown] = useState(false);

    //** useEffect with dependency */
    useEffect(() => {
        //get tab name from tabData array.
        const tabNames = tabData.map(function (obj) {
            return Object.getOwnPropertyNames(obj)[0]
        });
        //fetch data from api if this is the first time.
        if (!tabNames.includes(tabSelected)) {
            fetch(`https://jsonplaceholder.typicode.com/${tabSelected}`)
                .then(res => res.json())
                .then(data => {
                    let rs = {};
                    rs[tabSelected] = data;
                    tabData.push(rs)
                    setData(data);
                });
        } else {
            //retrieve data if it's already pushed to tabData.
            const data = _find(tabData, function (o) { return o.hasOwnProperty(tabSelected) });
            setData(data[tabSelected]);
        }

    }, [tabSelected]);

    //** useEffect with DOM event */
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setIsShown(true)
            } else {
                setIsShown(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    //** useEffect() with timer functions */
    const [countdown, setCountdown] = useState(180);
    useEffect(() => {
        const myInterval = setInterval(() => {
            setCountdown(countdown - 1);
            // setCountdown(prev => prev - 1);
            // console.log('setInterval ' + countdown)
        }, 500);
        return () => {
            clearInterval(myInterval);
        }
    }, []);//need to pass [] here as dependency, else cb will run every time the component gets re-rendered, which means setInterval and clearInterval will get called repeatedly.

    //*useEffect() with preview avatar **//
    const [avatar, setAvatar] = useState();
    useEffect(() => {
        return () => {
            console.log("🚀 ~ avatar", avatar)
            if(avatar) {
                setTimeout(function () { window.URL.revokeObjectURL(avatar.preview); }, 0);

            }
        }
    }, [avatar]);
    const handlePreviewAvatar = (e) => {
        console.log("🚀 ~ handlePreviewAvatar", handlePreviewAvatar)
        const file = e.target.files[0];
        file.preview = window.URL.createObjectURL(file)
        setAvatar(file);
    }

    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            <img src={avatar && avatar.preview} width="10%" />
            <hr />
             {/** useEffect() with timer functions */}
            {countdown}
            <button onClick={() => setCountdown(countdown - 1)}>Click here</button>
            <div>
                <input
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <hr />
             {/** useEffect with dependency */}
            {
                tabs.map(tab => {
                    return <button
                        key={tab}
                        onClick={() => setTabSelected(tab)}
                        style={tabSelected === tab ? { color: '#fff', background: '#333' } : {}}
                    >
                        {tab}
                    </button>
                })
            }
            <ul>
                {
                    data.map(dt => {
                        return (
                            <li key={dt.id}>
                                {dt.name ?? dt.title}
                            </li>
                        )
                    })
                }
            </ul>
            {/** useEffect with DOM event */}
            {
                isShown && <button
                    style={{ position: 'fixed', right: 30, bottom: 20, 'zIndex': 99 }}
                >To Top</button>
            }

        </div>
    )
}

export default Content;

/** Note
// Events: Add / remove event listener.
// Observer pattern: subscribe/ unsubscribe.
// Clousre.
// Timers: setTimeout, clearTimeout, clearInterval, setInterval.
// useState()
// Mounted/ unmounted
1. useEffect(cb)
- cb is called when componnent re-renders.
- cb is called when new element is added to DOM.
2. useEffect(cb, [])
- cb is called once when component is mounted, not when re-rendered.
3. useEffect(cb, [dependency])
- cb is called when dependency changes.

* Common characteristrics:
- cb gets called when component is mounted.
- cleanup function gets called right after component is unmounted.
- cleanup function gels called before cb does (but for component unmounted).
*/
