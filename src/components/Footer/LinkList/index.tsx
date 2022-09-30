import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: #464646;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
`;

const linkArray = [
  "Quem somos nós",
  "Política de privacidade",
  "Programa de fidelidade",
  "Nossas lojas",
  "Quero ser franqueado",
  "Anuncie aqui",
];

const LinkList = () => {
  return (
    <LinkContainer>
      {linkArray.map((link, index) => (
        <Link key={index}>{link}</Link>
      ))}
    </LinkContainer>
  );
};

export default LinkList;
