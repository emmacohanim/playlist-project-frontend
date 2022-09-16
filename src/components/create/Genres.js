function Genres({ genres, handleClick, selectedGenres  }) {
  

  const selectedGenresP = selectedGenres.map((selectedGenre) => {
    return <p key={selectedGenre}>{selectedGenre}</p>;
  });
  // highlight
  const genreButtons = genres.map((genre) => {
    return (
      <button key={genre}
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
      {selectedGenresP}
      <div key="buttons" id="button-div">{genreButtons}</div>
    </div>
  );
}

export default Genres;
