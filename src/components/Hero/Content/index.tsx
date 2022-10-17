import { CustomButton } from "../../Button";
import { BannerSubtitle, BannerTitle, BannerWrapper } from "./styles";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerTitle>Dezembro promocional</BannerTitle>
      <BannerSubtitle>Produtos selecionados com 33% de desconto</BannerSubtitle>
      <CustomButton className="small">Ver Consoles</CustomButton>
    </BannerWrapper>
  );
};

export default Banner;
