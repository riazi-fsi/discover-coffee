const Banner = (props) => {
    return (
        <div>
            <h1 className="text-blue-700 font-bold text-5xl"><span className="text-white text-5xl block ">Coffee</span> Connoisseur</h1>
            <p className="text-black text-2xl mt-3">Discover your local coffeeshop</p>
            <button className="text-white bg-purple-600 p-3 px-4 mt-3 hover:border " onClick={props.handleOnclick}>{props.buttonText}</button>
        </div>
    )
}

export default Banner;