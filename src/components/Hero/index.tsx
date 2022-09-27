import styled from "styled-components";
import Banner from "./Content";

const HeroContainer = styled.section`
  align-items: center;
  background-image: url("/banner-image.png");
  display: flex;
  height: 352px;
  width: 100vw;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Banner />
    </HeroContainer>
  );
};

export default Hero;
