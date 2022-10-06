import { FiArrowRight } from "react-icons/fi";
import { Title } from "../../Title";
import { CategoryRowWrapper, Link } from "./styles";

interface Props {
  category: string;
}

const CategoryRow = (props: Props) => {
  const { category } = props;
  return (
    <CategoryRowWrapper>
      <Title>{category}</Title>
      <Link href="#">
        Ver Tudo <FiArrowRight size={24} style={{ marginLeft: "8px" }} />
      </Link>
    </CategoryRowWrapper>
  );
};

export default CategoryRow;
