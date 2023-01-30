import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoWindows
} from "react-icons/io";
import {
  SiReact,
  SiReactrouter,
  SiRedux,
  SiReduxsaga,
  SiVisualstudiocode,
  SiCanva,
  SiSlack,
  SiFramer,
  SiBootstrap,
  SiStyledcomponents
} from "react-icons/si";
import { ImGit } from "react-icons/im";
import { Icon } from "./styled";
import { nanoid } from 'nanoid';

export const IconsBlock = () =>{
  return ([
    <IoLogoHtml5 title="HTML" />,
    <IoLogoCss3 title="CSS" />,
    <IoLogoJavascript title="JavaScript" />,
    <SiReact title="React" />,
    <SiReactrouter title="React Router" />,
    <SiRedux title="Redux" />,
    <SiReduxsaga title="Redux Saga" />,
    <SiStyledcomponents title="Styled Components" />,
    <SiFramer title="Framer" />,
    <SiBootstrap title="Bootstrap" />,
    <ImGit title="Git" />,
    <IoLogoGithub title="GitHub" />,
    <SiVisualstudiocode title="Visual Studio Code" />,
    <SiCanva title="Canva" />,
    <SiSlack title="Slack" />,
    <IoLogoWindows title="Windows" />
  ].map((index) => (
    <Icon
      key={nanoid()}
    >
      {index}
    </Icon>
  ))
  );
};