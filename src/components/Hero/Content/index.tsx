import Button from "../../Button/styles";
import { BannerSubtitle, BannerTitle, BannerWrapper } from "./styles";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerTitle>Dezembro promocional</BannerTitle>
      <BannerSubtitle>Produtos selecionados com 33% de desconto</BannerSubtitle>
      <Button className="small">Ver Consoles</Button>
    </BannerWrapper>
  );
};

export default Banner;
