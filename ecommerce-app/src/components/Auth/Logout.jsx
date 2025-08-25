import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

export default function Logout(){
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    
    const handleLogout = () => {
        sessionStorage.removeItem('user');
        setLogin(false);
        alert('Logout successful!');
        navigate('/login');
    };
    
    return (
        <div className="logout-container">
        <h2>Are you sure you want to logout?</h2>
        <button onClick={handleLogout}>Logout</button>
        </div>
    );
}