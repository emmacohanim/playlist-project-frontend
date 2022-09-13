import { Link } from "react-router-dom"


function NavBarHomepage() {
    return(
    <div id="navbar-homepage">
        <div>
        <Link id="create-playlist" to="/create-playlist">Create Playlist</Link>
        </div>
        <div>
        <Link id="browse-playlists" to="/browse-playlists">Browse Playlists</Link>
        </div>
    </div>
    )
}
export default NavBarHomepage
