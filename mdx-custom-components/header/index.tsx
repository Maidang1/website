import styled from "styled-components";

const StyledH1 = styled.h1`
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
`;

const StyledH2 = styled.h2`
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 12px;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
`;

export const H1 = ({ children }: any) => {
  return <StyledH1>{children}</StyledH1>;
};

export const H2 = ({ children }: any) => {
  return <StyledH2>{children}</StyledH2>;
};
