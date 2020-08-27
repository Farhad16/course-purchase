import React from 'react';
import fakeData from '../../fakeData';
import demoCourse from '../../demoCourse'
import Course from '../Course/Course';
import './MainContent.css';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const MainContent = () => {

    const [addCourse, setAddCourse] = useState([]);

    const handleAddCourse = (course) => {
        const newCourse = [...addCourse, course];
        setAddCourse(newCourse);
    };

    console.log(fakeData.length);
    return (
        <div className="main-content">
            <div className="sidebar">
                {
                    demoCourse.map(cr => <Sidebar course={cr} key={cr.id}></Sidebar>)
                }

            </div>
            <div className="courses">
                {
                    fakeData.map(course => <Course course={course} handleAddCourse={handleAddCourse} key={course.id}></Course>)
                }
            </div>
            <div className="cart">
                <Cart cart={addCourse}></Cart>
            </div>
        </div>
    );
};

export default MainContent;