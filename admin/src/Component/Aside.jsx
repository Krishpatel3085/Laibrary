import React from 'react'
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo2.png'
import './Aside.css'

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

    const gotoBook = () => {
        navigate("/book");
        setActivePage('book');
    }

    const gotoUser = () => {
        navigate("/user");
        setActivePage('user');
    }

    return (
        <>
            <aside className='p-3'>
                <div className="title">
                    <h4 className='d-flex  justify-content-between'>
                        <span>
                            ADMINS
                        </span>
                        <span >
                            <i class="bi bi-list"></i>
                        </span>
                    </h4>
                </div>
                <div className="profile mt-4">
                    <img src={logo} alt="User" className='img-fluid' />
                    <h3 className='mt-3' style={{color:"#4cceac"}}>LMS</h3>
                </div>
                <div className="menus text-start ms-3 ">

                    <ul>
                        <li> <a href="" onClick={gotoDashboard}><i class="bi bi-house-door"></i> DashBoard</a>  </li>
                    </ul>
                    <p>Pages</p>
                    <ul>
                        <li><a href="" onClick={gotoForm}><i class="bi bi-table"></i> Form</a></li>
                        <li><a href="" onClick={gotoBook}><i class="bi bi-book"></i> Books </a></li>
                        <li><a href="" onClick={gotoUser}><i class="bi bi-person-circle"></i> User</a></li>
                    </ul>
                    <p>Data</p>
                    <ul>
                        <li><a href=""><i class="bi bi-people-fill"></i> ManageTeam</a></li>
                        <li><a href=""><i class="bi bi-calendar"></i> Calender</a></li>
                        <li><a href=""><i class="bi bi-question-circle"></i> FAQ </a></li>
                    </ul>
                </div>
            </aside>

        </>
    )
}
