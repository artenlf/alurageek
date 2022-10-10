import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const UploadButton = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button
        sx={{
          fontFamily: "Raleway, sans-serif",
          fontSize: "14px",
          textTransform: "none",
        }}
        variant="contained"
        component="label"
      >
        Selecionar imagem do computador
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
  );
};

export default UploadButton;
