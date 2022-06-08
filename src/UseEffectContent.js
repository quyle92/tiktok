import { useState, useEffect } from 'react';
import _find from 'lodash/find';

const tabs = ['posts', 'comments', 'albums'];
var tabData = [];
const lessons = [
    { id: 1, title: 'what is Reactjs?' },
    { id: 2, title: 'Why should we learn React?' },
    { id: 3, title: 'What is arrow function?' },
];

function UseEffectContent() {
    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);
    const [tabSelected, setTabSelected] = useState('posts');
    const [isShown, setIsShown] = useState(false);
    console.log('render');

    //** useEffect with dependency */
    useEffect(() => {
        console.log('useEffect');
        //get tab name from tabData array.
        const tabNames = tabData.map(function (obj) {
            return Object.getOwnPropertyNames(obj)[0];
        });
        //fetch data from api if this is the first time.
        if (!tabNames.includes(tabSelected)) {
            fetch(`https://jsonplaceholder.typicode.com/${tabSelected}`)
                .then((res) => res.json())
                .then((data) => {
                    let rs = {};
                    rs[tabSelected] = data;
                    tabData.push(rs);
                    setData(data);
                });
        } else {
            //retrieve data if it's already pushed to tabData.
            const data = _find(tabData, function (o) {
                return o.prototype.hasOwnProperty.call(tabSelected);
            });
            setData(data[tabSelected]);
        }
    }, [tabSelected]);

    //** useEffect with DOM event */
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setIsShown(true);
            } else {
                setIsShown(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //** useEffect() with timer functions */
    const [countdown, setCountdown] = useState(180);
    useEffect(() => {
        const myInterval = setInterval(() => {
            setCountdown(countdown - 1);
            // console.log('setInterval ' + countdown)
        }, 500);
        return () => {
            clearInterval(myInterval);
        };
    }, []); //need to pass [] here as dependency, else cb will run every time the component gets re-rendered, which means setInterval and clearInterval will get called repeatedly.

    //*useEffect() with preview avatar **//
    const [avatars, setAvatars] = useState([]);
    useEffect(() => {
        return () => {
            if (avatars.length > 0) {
                avatars.forEach((avatar) => {
                    URL.revokeObjectURL(avatar.preview);
                });
            }
        };
    }, [avatars]);
    const handlePreviewAvatar = (e) => {
        const files = e.target.files;
        let avatars = [];
        for (const file of files) {
            file.preview = URL.createObjectURL(file);
            avatars.push(file);
        }
        setAvatars(avatars);
    };

    //**useEffect() with fake Chat App*/
    const [lessonId, setLessonId] = useState();
    useEffect(() => {
        const handleComment = (e) => {
            console.log(e.detail);
        };
        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        };
    }, [lessonId]);

    return (
        <div>
            {/*useEffect() with fake Chat App*/}
            <ul>
                {lessons.map((lesson, index) => {
                    return (
                        <li
                            key={index}
                            style={{
                                color: lesson.id === lessonId ? 'red' : '#333',
                            }}
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.title}
                        </li>
                    );
                })}
            </ul>

            {/** useEffect() with preview avatar */}
            <input
                type="file"
                onChange={handlePreviewAvatar}
                multiple
            />
            {avatars.length > 0 &&
                avatars.map((avatar, index) => {
                    return (
                        <img
                            key={index}
                            src={avatar.preview}
                            width="10%"
                        />
                    );
                })}
            <hr />
            {/** useEffect() with timer functions */}
            {countdown}
            <button onClick={() => setCountdown(countdown - 1)}>Click here</button>
            <div>
                <input onChange={(e) => setTitle(e.target.value)} />
            </div>
            <hr />
            {/** useEffect with dependency */}
            {tabs.map((tab) => {
                return (
                    <button
                        key={tab}
                        onClick={() => setTabSelected(tab)}
                        style={tabSelected === tab ? { color: '#fff', background: '#333' } : {}}
                    >
                        {tab}
                    </button>
                );
            })}
            <ul>
                {data.map((dt) => {
                    return <li key={dt.id}>{dt.name ?? dt.title}</li>;
                })}
            </ul>
            {/** useEffect with DOM event */}
            {isShown && <button style={{ position: 'fixed', right: 30, bottom: 20, zIndex: 99 }}>To Top</button>}
        </div>
    );
}

export default UseEffectContent;

/** Note
// Events: Add / remove event listener.
// Observer pattern: subscribe/ unsubscribe.
// Clousure.
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
