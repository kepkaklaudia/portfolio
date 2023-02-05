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
import { Icon, StyledTooltip } from "./styled";
import { nanoid } from 'nanoid';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export const IconsBlock = () => {
  return ([
    {
      logo: <IoLogoHtml5 />,
      title: "HTML"
    },
    {
      logo: <IoLogoCss3 />,
      title: "CSS"
    },
    {
      logo: <IoLogoJavascript />,
      title: "JavaScript"
    },
    {
      logo: <SiReact />,
      title: "React"
    },
    {
      logo: <SiReactrouter />,
      title: "React Router"
    },
    {
      logo: <SiRedux />,
      title: "Redux"
    },
    {
      logo: <SiReduxsaga />,
      title: "Redux Saga"
    },
    {
      logo: <SiStyledcomponents />,
      title: "Styled Components"
    },
    {
      logo: <SiFramer />,
      title: "Framer"
    },
    {
      logo: <SiBootstrap />,
      title: "Bootstrap"
    },
    {
      logo: <ImGit />,
      title: "Git"
    },
    {
      logo: <IoLogoGithub />,
      title: "GitHub"
    },
    {
      logo: <SiVisualstudiocode />,
      title: "Visual Studio Code"
    },
    {
      logo: <SiCanva />,
      title: "Canva"
    },
    {
      logo: <SiSlack />,
      title: "Slack"
    },
    {
      logo: <IoLogoWindows />,
      title: "Windows"
    },
  ].map(({ logo, title }) => (
    <OverlayTrigger
      key={nanoid()}
      overlay={
        <StyledTooltip>
          {title}
        </StyledTooltip>
      }
    >
      <Icon>
        {logo}
      </Icon>
    </OverlayTrigger>
  ))
  );
};