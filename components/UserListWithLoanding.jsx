import { useState,useEffect } from "react";

const UserListWithLoanding = () => {


    const [users,setUsers] = useState([]);
    const [isLoanding, setLoanding] = useState(true);
    const [error, setError] = useState(null)

    useEffect(( )=> {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                
                if(!response.ok){
                    throw new Error("Error al obtener los datos.")
                }

                const data = await response.json()
                setUsers(data)
                    
            }catch (error) {
                setError(error)
            }finally {
                  setTimeout(() => {
                    setLoanding(false);
                }, 2000);


            }
        
        }

        
        fetchUsers();
    }, [])


    if (isLoanding) {
        return <p>Cargando......</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

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

export default UserListWithLoanding;