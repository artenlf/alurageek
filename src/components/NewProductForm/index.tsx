import React from "react";
import { Title } from "../Title";
import Button from "../Button/styles";
import TextFieldInput from "../TextField/styles";
import GreySection from "../GreySection";
import { FormContainer, InlineField } from "./styles";
import UploadButton from "../UploadButton";
import { listOfCategories } from "../ProductsGrids";
import { MenuItem } from "@mui/material";

const NewProductForm = () => {
  const [category, setCategory] = React.useState("");

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <GreySection>
        <FormContainer className="full-width">
          <Title>Adicionar novo produto</Title>
          <TextFieldInput label="URL da imagem" fullWidth />
          <UploadButton />
          <TextFieldInput
            select
            label="Categoria"
            value={category}
            onChange={handleChangeCategory}
            fullWidth
          >
            {listOfCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextFieldInput>
          <TextFieldInput label="Nome do Produto" fullWidth />
          <TextFieldInput label="Preço do Produto" type="number" fullWidth />
          <TextFieldInput
            label="Descrição do produto"
            multiline
            minRows={3}
            fullWidth
          ></TextFieldInput>

          <Button className="full-width margin-top">Adicionar produto</Button>
        </FormContainer>
      </GreySection>
    </>
  );
};

export default NewProductForm;
