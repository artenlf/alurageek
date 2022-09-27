import styled from "styled-components";
import Banner from "./Content";

const HeroContainer = styled.section`
  align-items: flex-end;
  background-image: url("/banner-image.png");
  display: flex;
  height: 352px;
  padding: 0 152px 32px 152px;
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
