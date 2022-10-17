import styled from "styled-components";
import Button from "@mui/material/Button";

export const CustomButton = styled(Button)`
  align-items: center;
  background-color: #2a7ae4;
  border: 1px solid #2a7ae4;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  color: #ffffff;
  display: flex;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  height: 51px;
  text-transform: none;
  width: 182px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  :hover {
    background-color: #2163ba;
    font-weight: 600;
  }
  &.white {
    background-color: #ffffff;
    color: #2a7ae4;
    :hover {
      background-color: #e9e9e9;
    }
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
  &.bold {
    font-weight: 600;
    :hover {
      font-weight: 700;
    }
  }
`;
