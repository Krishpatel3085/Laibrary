import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/admin-logo.png';

export default function Aside() {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState('Dashboard'); // Default to 'Dashboard'

    const gotoDashboard = () => {
        navigate("/");
        setActivePage('Dashboard');
    }

    const gotoForm = () => {
        navigate("/form");
        setActivePage('form');
    }

    const gotoTable = () => {
        navigate("/book");
        setActivePage('book');
    }

    const gotoUser = () => {
        navigate("/user");
        setActivePage('user');
    }

    return (
        <>
            <div className="logo">
                <img src={logo} alt="Logo" className='w-75 m-4' />
            </div>
            <aside>
                <ul>
                    <li className={activePage === 'Dashboard' ? 'active' : ''}>
                        <a href="#" onClick={gotoDashboard}>
                            <i className="bi bi-house-fill"></i> Dashboard
                        </a>
                    </li>
                    <li className={activePage === 'form' ? 'active' : ''}>
                        <a href="#" onClick={gotoForm}>
                            <i className="bi bi-ui-checks-grid"></i> Form
                        </a>
                    </li>
                    <li className={activePage === 'book' ? 'active' : ''}>
                        <a href="#" onClick={gotoTable}>
                            <i className="bi bi-table"></i> Books
                        </a>
                    </li>
                    <li className={activePage === 'user' ? 'active' : ''}>
                        <a href="#" onClick={gotoUser}>
                            <i className="bi bi-person-circle"></i> User
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-gear-fill"></i> Settings
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}
