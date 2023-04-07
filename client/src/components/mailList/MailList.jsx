import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save money and time!</h1>
            <span className="mailDesc">Sign up to stay updated!</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Enter your email here" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList