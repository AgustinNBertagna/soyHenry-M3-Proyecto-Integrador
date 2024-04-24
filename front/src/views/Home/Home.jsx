import { useState } from "react";
import ImgText from "../../components/ImgText/ImgText";
import texts from "../../helpers/texts.js";

export default function Home() {
  const [textsToShow, setTextsToShow] = useState(texts);

  return (
    <div>
      {textsToShow.map((text, index) => (
        <ImgText key={index} text={text} />
      ))}
    </div>
  );
}
