import { Link } from "react-router-dom";
import image2 from "../assets/images/2eye.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/Abstract-F-Jpg.jpg";
import image1 from "../assets/images/City.jpg";
import image5 from "../assets/images/Crick-jpg.jpg";
import image6 from "../assets/images/logo-3D.jpg";
import image9 from "../assets/images/Logo-G.jpg";
import image10 from "../assets/images/Logo-J.jpg";
import image8 from "../assets/images/NATURAL.jpg";
import image7 from "../assets/images/old-mansion-D-N.jpg";
import classes from "./styles/Videos.module.css";
import Video from "./Video";

const Videos = () => {
  return (
    <div className={classes.videos}>
      <Link to="/quiz">
        <Video>
          <img src={image1} alt="City" />
        </Video>
      </Link>
      <Link to="/quiz">
        <Video>
          <img src={image2} alt="City" />
        </Video>
      </Link>
      <Link to="/quiz">
        <Video>
          <img src={image3} alt="City" />
        </Video>
      </Link>
      <Link to="/quiz">
        <Video>
          <img src={image4} alt="City" />
        </Video>
      </Link>
      <Link to="/quiz">
        <Video>
          <img src={image5} alt="City" />
        </Video>
      </Link>
      <Link to="/quiz">
        <Video>
          <img src={image6} alt="City" />
        </Video>
      </Link>
      <Link to="/quiz">
        <Video>
          <img src={image7} alt="City" />
        </Video>
      </Link>
      <Link to="/quiz">
        <Video>
          <img src={image8} alt="City" />
        </Video>
      </Link>
      <Link to="/quiz">
        <Video>
          <img src={image9} alt="City" />
        </Video>
      </Link>
      <Link to="/quiz">
        <Video>
          <img src={image10} alt="City" />
        </Video>
      </Link>
    </div>
  );
};

export default Videos;
