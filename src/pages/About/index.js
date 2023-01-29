import { LineThrough, StyledButton } from "./styled";
import Accordion from 'react-bootstrap/Accordion';

const About = () => {
  return (
      <Accordion className="mb-4 mx-4">
        <Accordion.Item eventKey="0">
          <Accordion.Button as={StyledButton}>
            Jump into the world of programming
          </Accordion.Button>
          <Accordion.Body>
            <p>
              My first encounter with programming took place during my studies at the AGH University of Science and Technology. I studied Mechanical Engineering with a specialization:  Computer Science in Mechanical Engineering. Although there were not enough about programming. I've only learned a little bit of C++. At the time, this language seemed a bit complicated and difficult to me, but also interesting at the same time. And so I never thought about programming in my life!
            </p>
            <p>
              Later, after graduation, I decided to go abroad. I worked a lot, but it had nothing to do with programming. I was in Germany and the Netherlands but the last 2 years I was in Italy.
            </p>
            <p>
              Finally, I decided to come back to Poland and learn programming. It was something unattainable for me, but also I found it very valuable and enriching. We make decisions that define who we are. I felt that I wanted to do it and I'm starting to love it!
            </p>
            <p>
              I am a person of many <LineThrough>dreams</LineThrough> aims. All these things made me come to the conclusion that in 2023 I will become a <strong>Front-End Developer</strong>.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Button as={StyledButton}>
            A little bit about my hobbies
          </Accordion.Button>
          <Accordion.Body>
            <h5>
              I'm really passionate about sport!
            </h5>
            <p>
              A few years ago I trained triathlon, but now I do fitness every day at home. I believe that sport helps not only with physical health, but also in taking care of mental health, peace of mind and soul, and maintaining discipline. I know a little bit about machines so i can confidently say that i am a well-oiled machine!
            </p>
            <h5>
              I'm interested in baking and cooking.
            </h5>
            <p>
              I love testing new recipes and experimenting with them. When i travel i like to taste the local cuisine, discover new flavors and add them to my everyday dishes
            </p>
            <h5>
              I'm crazy about travelling!
            </h5>
            <p>
              I'm crazy about travelling! When we decide to travel we can learn about new cultures, ways of life and habits of other people. We can see the world as they see it because we are in their natural environment. For a moment we are part of another world, so we can develop ourselves, acquire deeper understanding and broaden our horizons.
            </p>
            <p>
              We can learn how to be able to take care of ourselves in each situation and how to survive in each conditions. We can easily see that we are ready for everything, for each situations in our life. The world is ours!
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
};

export default About;