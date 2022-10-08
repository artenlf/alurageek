import React from "react";
import { Title } from "../Title";
import Button from "../Button";
import TextFieldInput from "../TextField/styles";
import GreySection from "../GreySection";
import FormContainer from "../Containers/FormContainer";
import UploadButton from "../UploadButton";
import { InlineWrapper } from "../Wrapper";
import { listOfCategories } from "../ProductsGrids";
import { Menu, MenuItem } from "@mui/material";

const NewProductForm = () => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <GreySection>
        <FormContainer>
          <Title>Adicionar novo produto</Title>
          <InlineWrapper>
            <TextFieldInput label="URL da imagem" fullWidth />
            <UploadButton />
          </InlineWrapper>
          <TextFieldInput
            select
            label="Categoria"
            value={category}
            onChange={handleChange}
            fullWidth
          >
            {listOfCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextFieldInput>
          <TextFieldInput label="Nome do Produto" fullWidth />
          <TextFieldInput label="Preço do Produto" fullWidth />
          <TextFieldInput label="Descrição do produto" minRows={3} fullWidth />

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
