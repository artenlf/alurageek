import React from "react";
import { Title } from "../Title";
import CustomButton from "../Button";
import TextFieldInput from "../TextField";
import GreySection from "../GreySection";
import { FormContainer, InlineField } from "./styles";
import UploadButton from "../UploadButton";
import { listOfCategories } from "../ProductsGrids";
import { MenuItem } from "@mui/material";
import { TextFieldWrapper } from "../Wrapper";

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
          <TextFieldWrapper>
            <TextFieldInput label="URL da imagem" fullWidth />
          </TextFieldWrapper>
          <UploadButton />
          <TextFieldWrapper>
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
          </TextFieldWrapper>
          <TextFieldWrapper>
            <TextFieldInput label="Nome do Produto" fullWidth />
          </TextFieldWrapper>
          <TextFieldWrapper>
            <TextFieldInput label="Preço do Produto" type="number" fullWidth />
          </TextFieldWrapper>
          <TextFieldWrapper>
            <TextFieldInput
              label="Descrição do produto"
              multiline
              minRows={3}
              fullWidth
            />
          </TextFieldWrapper>

          <CustomButton className="full-width margin-top">
            Adicionar produto
          </CustomButton>
        </FormContainer>
      </GreySection>
    </>
  );
};

export default NewProductForm;
