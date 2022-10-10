import { FormControl } from "@mui/material";
import { styled } from "@mui/system";

const InputAdornment = styled("div")`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const PasswordContainer = styled(FormControl)`
  background-color: "white";
  border-radius: "4px";
  box-shadow: "2px 2px 4px #0000001f";
  margin: "0";
  width: "100%";
`;

export { InputAdornment, PasswordContainer };
