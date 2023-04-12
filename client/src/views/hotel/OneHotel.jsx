import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const OneHotel = () => {
    const photos = [
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max500/54304093.jpg?k=b4f962c5c3aa5a4cb985ea3ba30251f9286602c75e52d258f4c0049ef6485808&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max500/54304093.jpg?k=b4f962c5c3aa5a4cb985ea3ba30251f9286602c75e52d258f4c0049ef6485808&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max500/54304093.jpg?k=b4f962c5c3aa5a4cb985ea3ba30251f9286602c75e52d258f4c0049ef6485808&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max500/54304093.jpg?k=b4f962c5c3aa5a4cb985ea3ba30251f9286602c75e52d258f4c0049ef6485808&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max500/54304093.jpg?k=b4f962c5c3aa5a4cb985ea3ba30251f9286602c75e52d258f4c0049ef6485808&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max500/54304093.jpg?k=b4f962c5c3aa5a4cb985ea3ba30251f9286602c75e52d258f4c0049ef6485808&o=&hp=1"
        }
    ]
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book now!</button>
                    <div className="hotelTitle"><b>Grand Hotel</b></div>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>12345 Street St.</span>
                    </div>
                    <span className="hotelDistance">
                        Best location! 200m from Capital
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay  over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map(photo=>(
                            <div className="hotelImgWrapper">
                                <img src={photo.src} alt="" className="hotelImg"/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Stay in Orlando</h1>
                            <p className="hotelDesc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam nostrum quaerat accusamus labore tempore totam? Vitae iure vero alias molestiae beatae maiores sint explicabo? Beatae facere perferendis fuga optio?
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for 7 nights!</h1>
                            <span>Excellent score of 9.8!</span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneHotel