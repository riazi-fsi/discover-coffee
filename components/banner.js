const Banner = (props) => {
    return (
        <div>
            <h1><span>Coffee</span> Connoisseur</h1>
            <p>Discover your local coffeeshop</p>
            <button onClick={props.handleOnclick}>{props.buttonText}</button>
        </div>
    )
}

export default Banner;