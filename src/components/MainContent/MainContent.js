import React from 'react';
import fakeData from '../../fakeData';
import Course from '../Course/Course';
import './MainContent.css';
import Cart from '../Cart/Cart';


const MainContent = () => {
    return (
        <div className="main-content">
            <div className="sidebar">
                sidebar
            </div>
            <div className="courses">
                {
                    fakeData.map(course => <Course course={course}></Course>)
                }
            </div>
            <div className="cart">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default MainContent;