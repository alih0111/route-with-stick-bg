import {Link} from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/gallery">Visit the Gallery</Link>
      <h2>Fearured Image</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
      </ul>
    </>
  );
}
