import "./header.css"
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  { faCar, faHotel, faPlane, faChampagneGlasses, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return(
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerItem active">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Stays</span>
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Rentals</span>
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faChampagneGlasses} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">What are you waiting for? Your dream travel is right here.</h1>
                <p className="headerDesc">Join Today</p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faHotel} className="headerIcon"/>
                        <input type="text" 
                        className="headerSearch" 
                        placeholder="Where are you going?" 
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                        <span  className="headerSearchText">date to date</span>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                        <span className="headerSearchText">2 adults 2 children 1 room</span>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Header