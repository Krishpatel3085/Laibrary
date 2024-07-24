import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Aside() {
    const navigate = useNavigate()

    const [activePage, setActivepage] = useState('about');

    const gotoDashboard = () => {
        navigate("/")
        setActivepage('Dashboard');
    }

    const gotoForm = () => {
        navigate("/form")
        setActivepage('form');

    }
    const gotoTable = () => {
        navigate("/book")
        setActivepage('book');

    }
    const gotoUser = () => {
        navigate("/user")
        setActivepage('user');

    }

    return (
        <aside>

            <ul>
                <li><a href="#" onClick={gotoDashboard}><i class="bi bi-house-fill"></i> Deshboard</a></li>
                <li><a href="#" onClick={gotoForm}><i class="bi bi-ui-checks-grid"></i> Form</a></li>
                <li><a href="#" onClick={gotoTable}><i class="bi bi-table"></i> Books</a></li>
                <li><a href="#" onClick={gotoUser}><i class="bi bi-person-circle"></i> User</a></li>
                <li><a href=""><i class="bi bi-gear-fill"></i> Setting</a></li>
            </ul>
        </aside>
    )
}
