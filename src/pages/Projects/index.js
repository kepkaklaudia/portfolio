import { Motion } from "./Motion";
import { IconsBlock } from "./IconsBlock";
import { ReposCards } from "./ReposCards";

const Projects = () => (
  <Motion animatedElement={
    <>
      <h2>
        Technologies & Tools i use
      </h2>
      <div
        className="d-flex justify-content-center flex-wrap align-items-start"
      >
        <IconsBlock />
      </div>
      <h2>
        My projects
      </h2>
      <ReposCards />
    </>
  } />
)

export default Projects;