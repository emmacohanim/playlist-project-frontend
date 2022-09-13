import React, {useEffect} from 'react';
function CreatedPlaylist ({selectedGenres}) {
    // why can't we get tracks?
    useEffect(() => {
        fetch('https://api.spotify.com/v1/recommendations', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer BQDVfTnegFTzej196OGlZxJ3lcq35DeJ6rp3CBTVmoDDHc7MljTi3ND03JBlTzokzisxay_BgWMwejpQcNpDsREUjtK8Kj9zoHRHXZtvYk3XeZrmBzRhi6MIUzvFc97fNcL-Ozm296MyxfAVj5kLeZlKbjw0voYt8VfI82kRm56hip6j'
            }

        })
        .then(r=>r.json())
        .then(songs => console.log(songs.tracks))
      },[selectedGenres])
return (
    <div id="songs-in-playlist">
        {/* <Song/> */}
    </div>
    // return list of songs

)

}
export default CreatedPlaylist