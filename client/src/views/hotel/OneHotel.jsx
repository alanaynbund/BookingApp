import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

const OneHotel = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [slideNumber, setSlideNumber] = useState(0)

    const { data, loading, error, reFetch } = useFetch(`http://localhost:8080/api/hotels/find/${id}`)



    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            {loading ? "loading" :<div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book now!</button>
                    <div className="hotelTitle"><b>{data.name}</b></div>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data.address}</span>
                    </div>
                    <span className="hotelDistance">
                        Best location! {data.distance}m from Capital
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay  over ${data.cheapestPrice} at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {data.photos?.map(photo=>(
                            <div className="hotelImgWrapper">
                                <img src={photo.src} alt="" className="hotelImg"/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">{data.title}</h1>
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
                <MailList/>
                <Footer/>
            </div>}
        </div>
    )
}

export default OneHotel