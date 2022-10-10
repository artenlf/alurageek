import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

const InlineWrapper = styled.div`
  align-items: center;
  display: inline-flexbox;
  justify-content: space-between;
`;

export { Wrapper, GridWrapper, InlineWrapper };
