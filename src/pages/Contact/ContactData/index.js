import { StyledItem, StyledList } from "./styled";
import { Link } from "./Link";
import { Motion } from "./Motion";

export const ContactData = () => {
  return (
    <>
      <StyledList>
        <StyledItem>
          <Motion
            animatedElement={
              <Link
                href={"mailto:kepkaklaudia@gmail.com"}
                description={"📩 kepkaklaudia@gmail.com"}
              />
            }
          />
        </StyledItem>
        <StyledItem>
          <Motion
            animatedElement={"📲 515-943-229"}
          />
        </StyledItem>
        <StyledItem>
          <Motion
            animatedElement={
              <Link
                href={"https://github.com/kepkaklaudia"}
                description={"🌐 github.com/kepkaklaudia"}
              />
            }
          />
        </StyledItem>
      </StyledList>
    </>
  );
};