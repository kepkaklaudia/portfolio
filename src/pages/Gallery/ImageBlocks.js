import { Image } from "react-bootstrap";
import france from "./images/france.jpg";
import milano from "./images/milano.jpg";
import spain from "./images/spain.jpg";
import italy from "./images/italy.jpg";
import france1 from "./images/france1.jpg";
import portugal from "./images/portugal.jpg";
import spain2 from "./images/spain2.jpg";
import spain3 from "./images/spain3.jpg";
import spain4 from "./images/spain4.jpg";
import cracow from "./images/cracow.jpg";
import laSalette from "./images/laSalette.jpg";
import germany from "./images/germany.jpg";

export const ImageBlock1 = () => (
  [france, milano, spain, italy]
    .map((element) => (
      <Image
        key={element}
        className="w-100 shadow-1-strong rounded mb-4"
        src={element}
        alt={element}
      />
    ))
);

export const ImageBlock2 = () => (
  [france1, portugal, spain2, spain3]
    .map((element) => (
      <Image
        key={element}
        className="w-100 shadow-1-strong rounded mb-4"
        src={element}
        alt={element}
      />
    ))
);

export const ImageBlock3 = () => (
  [spain4, cracow, laSalette, germany]
    .map((element) => (
      <Image
        key={element}
        className="w-100 shadow-1-strong rounded mb-4"
        src={element}
        alt={element}
      />
    ))
);