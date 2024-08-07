import classes from "./styles/Video.module.css";
const Video = ({ children, className, ...rest }) => {
  return (
    <div className={classes.video} {...rest}>
      {children}
      <p>React Hooks Bangla React useReducer.</p>
      <div className={classes.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
};

export default Video;
