import { useState } from "react"

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}></button>
            <button onClick={handleLogout}></button>
            <div>User is {isLoggedIn ? 'Login' : 'Logout'}</div>
        </div>
    )
}