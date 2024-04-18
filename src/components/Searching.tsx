import "../styles/Searching.css"
const Searching = () =>{

    return(
        <div className="searching container">
            <input type="text" className="search_input" placeholder="Name of your product" />
            <button className="btn search_btn">Search</button>
        </div>
    )
}

export {Searching};