import React, { useState } from 'react';

const gifts = ['CPU i9', 'RAM 32GB', 'Keyboard'];

const courses = [
    {
        id: 1,
        name: 'php',
    },
    {
        id: 2,
        name: 'nodejs',
    },
    {
        id: 3,
        name: 'vuejs',
    },
];

function TwoWayBinding() {
    const [gift, setGift] = useState();
    const [courseName, setCourse] = useState();
    const [courseNameList, setCourseList] = useState([]);
    const takeGift = () => {
        setTimeout(() => {
            setGift(() => {
                const random = Math.floor(Math.random() * gifts.length);
                return gifts[random];
            });
        }, 500);
    };
    const selectCourseRadio = (name) => {
        setCourse(() => {
            return name;
        });
    };
    const selectCourseCheckbox = (name) => {
        setCourseList(() => {
            const listCourses = [...courseNameList];
            if (listCourses.includes(name)) {
                return listCourses.filter((course) => course !== name);
            }
            listCourses.push(name);

            return listCourses;
        });
    };
    return (
        <div style={{ padding: 32 }}>
            <h1>{gift || 'No gift.'}</h1>
            <button onClick={takeGift}>Take gift</button>
            <hr />
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input
                            type="radio"
                            value={course.name}
                            id={course.name}
                            onChange={() => selectCourseRadio(course.name)}
                            checked={course.name === courseName ? true : false}
                        />
                        <label htmlFor={course.name}>{course.name}</label>
                    </div>
                );
            })}
            <div>Selected course: {courseName}</div>
            <hr />
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input
                            type="checkbox"
                            value={course.name}
                            id={`checkbox_${course.name}`}
                            onChange={() => selectCourseCheckbox(course.name)}
                        />
                        <label htmlFor={`checkbox_${course.name}`}>{course.name}</label>
                    </div>
                );
            })}
            <div>List of selected course: {courseNameList.join(', ')}</div>
        </div>
    );
}

export default TwoWayBinding;
