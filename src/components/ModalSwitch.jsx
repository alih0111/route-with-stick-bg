import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import ImageView from "./ImageView";
import Modal from "./Modal";

export default function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      {console.log(background)}
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch>
      {background && <Route path="/img/:id" children={<Modal />} />}
    </>
  );
}
