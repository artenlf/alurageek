import styled from "styled-components";
import Title from "../Title";
import Button from "../Button";
import TextFieldInput from "../TextField";

const FormSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 64px;
`;

const formLabels = [
  "URL da imagem",
  "Categoria",
  "Nome do Produto",
  "Preço do Produto",
];

const NewProductForm = () => {
  return (
    <>
      <FormSection>
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
      </FormSection>
    </>
  );
};

export default NewProductForm;
