import "./style.css";

const SongListItem = ({ index, setCurrentIndex, listItemData }) => {
  function handleOnClick() {
    setCurrentIndex(index);
  }

  return (
    <div onClick={handleOnClick} className="songListItem">
      <div>
        <img src={listItemData.image} />
      </div>
      <div className="info">
        <p className="name">{listItemData.name}</p>
        <p className="singer">{listItemData.singer}</p>
      </div>
    </div>
  );
};
export default SongListItem;
