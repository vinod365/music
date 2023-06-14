import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <GraphicEqRoundedIcon />
      </div>
      <div className="name">
        <p>Play Tune</p>
      </div>
    </div>
  );
};
export default Header;
