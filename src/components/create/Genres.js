
function Genres({genres}) {

    const genreButtons = genres.map (genre => {
        return (
            <button className="genre-buttons">{genre}</button>
        )
    })

    return (
        <div id ="button-div">
            {genreButtons}
        </div>
    )
}

export default Genres