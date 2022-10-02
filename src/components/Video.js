import ReactPlayer from "react-player/youtube";
import classes from "../styles/Video.module.css";

export default function Video({ title, id, noq }) {
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className={classes.video}>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        controls
      />
      {/* <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      /> */}
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
