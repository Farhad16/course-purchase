import React from 'react';
import './Sidebar.css';
import '../../components/Assets/Css/bootstrap.min.css'

const Sidebar = (props) => {
    const { name, img, about } = props.course;
    return (
        <div className="sidebarStyle">
            <div className="catagory">
                <h6>{name}</h6>
                <img src={img} alt="" />
                <p><small>{about}</small></p>
            </div>
        </div>
    );
};

export default Sidebar;