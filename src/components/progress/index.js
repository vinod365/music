import "./style.css";

const ProgressBar = ({ currentVolume }) => {
  return (
    <div className="progress__bar">
      <div className="progress">
        <div className="progress__inside"></div>
      </div>
      <div className="time">
        <p>{Math.trunc(currentVolume * 10)}</p>
        <p>10</p>
      </div>
    </div>
  );
};
export default ProgressBar;
