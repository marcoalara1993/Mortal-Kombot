import React , { useState, useEffect } from 'react';
import axios from 'axios'
import './DataUsers.css'

function DataUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="users-widget">
            <ul className="users-widget-list">
                {users.map(user => <li className="users-list" key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
    
}

export default DataUsers;