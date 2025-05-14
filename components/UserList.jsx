import { useState,useEffect } from "react";

const UserList = () => {

    const [users,setUsers] = useState([]);

    useEffect(( )=> {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching data: ", error))

    }, [])

    return (
        <div>
            <h1>Listas de Users</h1>
            <ul>
                {
                    users.map((user) =>{
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </div>
    )
};

export default UserList;