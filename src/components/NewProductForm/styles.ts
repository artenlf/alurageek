import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 64px;
  .full-width {
    width: 559px;
  }
`;

const InlineField = styled.div`
  display: flexbox;
`;

export { FormContainer, InlineField };
