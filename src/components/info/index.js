import "./style.css";

const Info = ({ song }) => {
  return (
    <div className="info">
      <div className="song__name">
        <p>{song.name}</p>
      </div>
      <div className="singer__name">
        <p>{song.singer}</p>
      </div>
    </div>
  );
};
export default Info;
