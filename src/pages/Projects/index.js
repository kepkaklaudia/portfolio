import { Motion } from "./Motion";
import { IconsBlock } from "./IconsBlock";
import { ReposCards } from "./ReposCards";

const Projects = () => (
  <Motion animatedElement={
    <>
      <div
        className="d-flex justify-content-center flex-wrap align-items-start"
      >
        <IconsBlock />
      </div>
      <ReposCards />
    </>
  } />
)

export default Projects;