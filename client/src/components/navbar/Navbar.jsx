import { useContext } from "react"
import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        try{
            dispatch({type:"LOGOUT"})

            navigate("/")

        }catch(err){
            dispatch({type:"LOGIN-FAILURE"})
        }
    }

    return(
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                    <span className="logo">Bookr.</span>
                </Link>
                {user ? user.username : (<div className="navItems">
                    <button className="navButton">Register</button>
                    <Link to={"/login"}>
                        <button className="navButton">Login</button>
                    </Link>
                </div>)}
                    {user &&<button onClick={handleClick}>Logout</button>}
                
            </div>
        </div>
    )
}

export default Navbar

