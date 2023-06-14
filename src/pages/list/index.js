import SongList from "../../components/songlist/index.js";

import "./style.css";

function List({ setCurrentIndex, songsArr }) {
  return (
    <div className="list">
      <SongList setCurrentIndex={setCurrentIndex} songsArr={songsArr} />
    </div>
  );
}

export default List;
