import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo2.png';
import './Aside.css';
import $ from 'jquery'; // Import jQuery

export default function Aside() {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState('Dashboard'); // Default to 'Dashboard'
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Manage sidebar state

    const gotoDashboard = () => {
        navigate("/");
        setActivePage('Dashboard');
    };

    const gotoForm = () => {
        navigate("/form");
        setActivePage('form');
    };

    const gotoBook = () => {
        navigate("/book");
        setActivePage('book');
    };

    const gotoUser = () => {
        navigate("/user");
        setActivePage('user');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        $('#sidebar').toggleClass('sidebar-closed'); // Toggle class with jQuery
    };

    return (
        <>
            <aside id="sidebar" className={`p-3  ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <div className="title">
                    <h4 className='d-flex justify-content-between'>
                        {isSidebarOpen && <span>ADMINS</span>}
                        <span onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
                            <i className={`bi bi-${isSidebarOpen ? 'list' : 'list'}`}></i>
                        </span>
                    </h4>
                </div>
                {isSidebarOpen && (
                    <div className="profile mt-4">
                        <img src={logo} alt="User" className='img-fluid' />
                        <h3 className='mt-3' style={{ color: "#4cceac" }}>LMS</h3>
                    </div>
                )}
                <div className="menus text-start ms-3">
                    <ul>
                        <li>
                            <a href="#" onClick={gotoDashboard}>
                                <i className="bi bi-house-door"></i>
                                {isSidebarOpen && 'DashBoard'}
                            </a>
                        </li>
                    </ul>
                    {isSidebarOpen && <p>Pages</p>}
                    <ul>
                        <li>
                            <a href="#" onClick={gotoForm}>
                                <i className="bi bi-table"></i>
                                {isSidebarOpen && 'Form'}
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={gotoBook}>
                                <i className="bi bi-book"></i>
                                {isSidebarOpen && 'Books'}
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={gotoUser}>
                                <i className="bi bi-person-circle"></i>
                                {isSidebarOpen && 'User'}
                            </a>
                        </li>
                    </ul>
                    {isSidebarOpen && <p>Data</p>}
                    <ul>
                        <li>
                            <a href="#">
                                <i className="bi bi-people-fill"></i>
                                {isSidebarOpen && 'ManageTeam'}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-calendar"></i>
                                {isSidebarOpen && 'Calendar'}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-question-circle"></i>
                                {isSidebarOpen && 'FAQ'}
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
