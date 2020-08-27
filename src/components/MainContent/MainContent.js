import React from 'react';
import fakeData from '../../fakeData';
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

    return (
        <div className="main-content">
            <div className="sidebar">
                <Sidebar></Sidebar>
            </div>
            <div className="courses">
                {
                    fakeData.map(course => <Course course={course} handleAddCourse={handleAddCourse}></Course>)
                }
            </div>
            <div className="cart">
                <Cart cart={addCourse}></Cart>
            </div>
        </div>
    );
};

export default MainContent;