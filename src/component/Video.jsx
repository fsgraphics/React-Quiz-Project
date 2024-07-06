import image from "../assets/images/City.jpg";
import classes from "./styles/Video.module.css";
const Video = () => {
  return (
    <a href="./quiz.html">
      <div className={classes.video}>
        <img src={image} alt="City" />
        <p>React Hooks Bangla React useReducer.</p>

        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
