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

const Projects = () => {
  return (
    <>
        <div
          className="d-flex justify-content-center flex-wrap align-items-start"
        >
          {[
            <IoLogoHtml5 />,
            <IoLogoCss3 />,
            <IoLogoJavascript />,
            <SiReact />,
            <SiReactrouter />,
            <SiRedux />,
            <SiReduxsaga />,
            <SiStyledcomponents />,
            <SiFramer />,
            <SiBootstrap />,
            <ImGit />,
            <IoLogoGithub />,
            <SiVisualstudiocode />,
            <SiCanva />,
            <SiSlack />,
            <IoLogoWindows />
          ].map((index) => (
            <Icon
              key={nanoid()}
            >
              {index}
            </Icon>
          ))}
        </div>
    </>
  )
};

export default Projects;