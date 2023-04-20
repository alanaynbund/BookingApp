import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import './list.css'
import { useLocation } from 'react-router-dom'
import { format } from "date-fns"
import { useState } from 'react'
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"
import useFetch from "../../hooks/useFetch"
 
const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)

    const { data, loading, error, reFetch } = useFetch(`http://localhost:8080/api/hotels?city=${destination}&min=${min || 0}&max=${max || 1000}`)

    const handleClick = () => {
        reFetch()
    }

    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                            date[0].endDate,
                            "MM/dd/yyyy"
                             )}`}</span>
                             {openDate && <DateRange
                                onChange={(item) => setDate([item.selection])}
                                ranges={date}
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="lsItem">
                            <div className="lsItemOptions">
                                <label>Options</label>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Min price <small>per night</small></span>
                                    <input type="number" onChange={e=>setMin(e.target.value)}className="lsOptionInput"/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Max price <small>per night</small></span>
                                    <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput"/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText" placeholder={options.adult}>Adult</span>
                                    <input type="number" min={1} className="lsOptionInput"/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText" placeholder={options.children}>Children</span>
                                    <input type="number" min={0} className="lsOptionInput"/>
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText" placeholder={options.room}>Room</span>
                                    <input type="number" min={1} className="lsOptionInput"/>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleClick} className="lsSearchButton">Search</button>
                            
                    </div>
                
                    <div className="listResult">
                        {loading ? "loading" : <>'
                        {data.map(item=> (
                            <SearchItem item={item} key={item._id}/>
                        ))}
                        
                        </>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List