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
import { Icon, StyledButton, StyledCard } from "./styled";
import { nanoid } from 'nanoid';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, selectRepos, selectReposStatus } from "./reposSlice";
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import { Loader } from "../../common/Loader";
import { Error } from "./Error";
import { Motion } from "./Motion";

const Projects = () => {
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const status = useSelector(selectReposStatus);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch])

  return (
    <Motion animatedElement={
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
        {status === "loading" ? <Loader /> :
          status === "error" ? <Error /> :
            <Row
              xs={1}
              md={2}
              lg={3}
              className="my-4"
            >
              {repos.map(repo => (
                repo.homepage &&
                <Col
                  key={nanoid()}
                >
                  <Card
                    as={StyledCard}
                  >
                    <Card.Body>
                      <Card.Title
                        className="text-capitalize"
                      >
                        {repo.name.replaceAll("-", " ")}
                      </Card.Title>
                      <Card.Text
                        style={{
                          overflow: "auto",
                          height: "150px"
                        }}
                      >
                        {repo.description}
                      </Card.Text>
                      <Row>
                        <Col>
                          <StyledButton
                            href={repo.homepage}
                          >
                            Demo
                          </StyledButton>
                        </Col >
                        <Col>
                          <StyledButton
                            href={repo.html_url}
                          >
                            Code
                          </StyledButton>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        }
      </>
    } />
  )
};

export default Projects;