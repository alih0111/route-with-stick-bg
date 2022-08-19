import { IMAGES } from "./data";
import { Link,useLocation } from "react-router-dom";
import Thumbnail from "./Thumbnail";

export default function Gallery() {
  let location = useLocation()
  return (
    <div>
      {IMAGES.map((i) => (    
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            state: { background: location },
          }}
          >
          <Thumbnail color={i.color} />
          {i.title}
          <p></p>
        </Link>
      ))}
    </div>
  );
}
