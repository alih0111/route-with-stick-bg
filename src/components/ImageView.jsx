import {  useParams } from "react-router-dom";
import { IMAGES } from "./data";
import Image from "./Image";
export default function ImageView() {
  let { id } = useParams();
  let image = IMAGES[id];
//   let history = useHistory();

//   let back = (e) => {
//     history.goBack();
//   };
  return (
    <div
    //   onClick={back}
    //   style={{
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     right: 0,
    //     background: "rgba(0, 0, 0, 0.15)",
    //   }}
    >
      {/* <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444",
        }}
      > */}
        <h2>{image.title}</h2>
        <Image color={image.color} />
        {/* <button onClick={back}>close</button> */}
      {/* </div> */}
    </div>
  );
}
