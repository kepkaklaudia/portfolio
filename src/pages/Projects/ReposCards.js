import { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { fetchRepos, selectRepos, selectReposStatus } from "./fetchRepos/reposSlice";
import { nanoid } from 'nanoid';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import { StyledButton, StyledCard } from "./styled";
import { Loader } from "../../common/Loader";
import { Error } from "./Error";

export const ReposCards = () => {
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const status = useSelector(selectReposStatus);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch])

  return (
    <>
    { status === "loading" ? <Loader /> :
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
  );
};