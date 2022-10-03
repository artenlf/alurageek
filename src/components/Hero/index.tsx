import styled from "styled-components";
import Banner from "./Content";

const HeroContainer = styled.section`
  align-items: flex-end;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url("/banner-image.png");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  height: 352px;
  padding: 0 152px 32px 152px;
  width: 100%;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Banner />
    </HeroContainer>
  );
};

export default Hero;
