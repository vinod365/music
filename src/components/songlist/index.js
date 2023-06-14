import SongListItem from "../songListItem";

import "./style.css";

const SongList = ({ setCurrentIndex, songsArr }) => {
  return (
    <div className="songList">
      <p className="heading">Song List</p>
      <div className="lists">
        {songsArr.map((listItemData, index) => (
          <SongListItem
            setCurrentIndex={setCurrentIndex}
            index={index}
            listItemData={listItemData}
          />
        ))}
      </div>
    </div>
  );
};
export default SongList;
