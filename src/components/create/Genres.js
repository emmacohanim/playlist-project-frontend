function Genres({ genres, handleClick, selectedGenres  }) {
  

  const selectedGenresP = selectedGenres.map((selectedGenre) => {
    return <p>{selectedGenre}</p>;
  });
  // highlight
  const genreButtons = genres.map((genre) => {
    return (
      <button
        className={
          selectedGenres.includes(genre)
            ? "genre-buttons active"
            : "genre-buttons"
        }
        onClick={() => handleClick(genre)}
      >
        {genre}
      </button>
    );
  });

  return (
    <div>
      <p>{selectedGenresP}</p>
      <div id="button-div">{genreButtons}</div>
    </div>
  );
}

export default Genres;
