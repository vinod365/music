import "./style.css";

const AlbumArt = ({ song }) => {
  return (
    <div className="album__art">
      {song.duration == 0 ? (
        <video controls>
          <source src={song.url} type="video/mp4" />
        </video>
      ) : (
        <img src={song.image}></img>
      )}
    </div>
  );
};

export default AlbumArt;
