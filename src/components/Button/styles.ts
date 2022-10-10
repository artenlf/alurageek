import styled from "styled-components";
import { Button } from "@mui/material";

const CustomButton = styled(Button)`
  align-items: center;
  background-color: #2a7ae4;
  border: 1px solid #2a7ae4;
  color: #ffffff;
  display: flex;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  height: 51px;
  text-transform: none;
  transition: 0.3s;
  width: 182px;
  :hover {
    cursor: pointer;
    font-weight: 600;
    transform: scale(110%);
  }
  &.white {
    background-color: #ffffff;
    color: #2a7ae4;
  }
  &.small {
    width: 130px;
  }
  &.full-width {
    width: 100%;
  }
  &.margin-top {
    margin-top: 8px;
  }
  &.add-product {
    width: 176px;
  }
`;

export default CustomButton;
