import React from 'react';
import './Course.css';
import { Button } from 'react-bootstrap';
import '../../components/Assets/Css/bootstrap.min.css'

const Course = (props) => {
    const { name, img, price, instructor } = props.course;

    return (
        <div className="courseDetails">
            <div className="profilePic">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h3>{name}</h3>
                <p>$<span>{price}</span></p>
                <p>Instructor  <span>{instructor}</span></p>
                <Button variant="primary">Enroll Now</Button>{' '}
            </div>
        </div>
    );
};

export default Course;