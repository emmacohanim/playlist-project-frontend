import Header from "../Header";
import React, {useState} from "react";

function BrowsePlaylists() {

const [input, setInput] = useState("")
function handleInput(e) {
    e.preventDefault();
    setInput(e.target.value);
}

// function handleSubmit(e) {
//     e.preventDefault();
//     fetch(`http://localhost:9292/users/${input}`)
//     // return user playlists where username includes search query
//     // user.username user.id  
// }

    return (
        <div>
            <Header/>
            <form id="search-by-user" onSubmit={() => console.log('submitted')}>
                <label>
                    Search
                    <input type="text" name="search-query" value={input} onChange={handleInput} placeholder="Enter username..."/>
                </label>
                    <input type="submit" name="search" value="submit" />
            </form>
        </div>
    )

}
export default BrowsePlaylists