import { Title } from "../Title";
import Button from "../Button";
import TextFieldInput from "../TextField";
import GreySection from "../GreySection";
import FormContainer from "../Containers/FormContainer";

const formLabels = [
  "URL da imagem",
  "Categoria",
  "Nome do Produto",
  "Preço do Produto",
];

const NewProductForm = () => {
  return (
    <>
      <GreySection>
        <FormContainer>
          <Title>Adicionar novo produto</Title>
          {formLabels.map((label, index) => (
            <TextFieldInput key={index} label={label} required />
          ))}
          <TextFieldInput
            label="Descrição do Produto"
            required
            multiline
            minRows={3}
          />

          <Button
            primary={false}
            formSubmit={true}
            type="submit"
            fullWidth={true}
            style={{ marginTop: "8px" }}
          >
            Adicionar produto
          </Button>
        </FormContainer>
      </GreySection>
    </>
  );
};

export default NewProductForm;
