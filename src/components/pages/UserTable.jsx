import React, {useState, useEffect, useRef} from 'react'

function UserTable() {
    const [users, setUsers] = useState([]); // State to hold list of users
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    const circle = useRef()

    // fetch the user form the the /users API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                } 
                const data = await response.json();
                setUsers(data); // Update the state with the fetched users data
                setLoading(false); // Stop loading after data is fetched
            } catch (error) {
                setError(error.message); // Set error message if the fails
                setLoading(false);
            }
        }

        fetchUsers();
    }, [])

    // If still loading show loading message
    if (loading) {
        return <p>Loading users...</p>
    }
    
    // If there is an error, display the error message
    if (error) {
        return <p>Error: {error}</p>
    }
    return (
    <div>
        <h2>User list</h2>

        <div onMouseDownCapture={circle.current}>
            circle
        </div>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserTable
