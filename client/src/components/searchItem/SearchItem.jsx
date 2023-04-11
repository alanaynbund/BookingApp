import "./searchItem.css"

const SearchItem = () => {
    return(
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/54304163.webp?k=0f75a7bc17dda892f039f08bd55aa1e29ec653ee7c0f2c25728eb925b197b7b5&o=&s=1" 
            alt="" 
            className="searchImg" />
            <div className="searchDesc">
                <h1 className="searchTitle">Orlando Apts</h1>
                <span className="searchDistance">500m from center</span>
                <span  className="searchTaxi">Free airport taxi</span>
                <span className="searchSubtitle">
                    Studio Apartment
                </span>
                <span className="searchFeatures">
                    2 bedroom 1 bathroom
                </span>
                <span className="searchCancelOp">Free cancellation</span>
                <span className="searchCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>

            </div>
            <div className="searchDetails">
                <div className="searchRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="searchDetailTexts">
                    <span className="searchPrice">$123</span>
                    <span className="TaxOp">Includes taxes and fees</span>
                    <button className="searchCheckButton">See availability</button>
                </div>
            </div>
        </div>
        
    )
}

export default SearchItem