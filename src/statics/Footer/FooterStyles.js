import styled from "styled-components";

export const Box = styled.div`
  //   padding: 80px 60px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 20px;
  padding-top: 60px;

  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
    position: relative;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Column2 = styled.div`
  flex-direction: column;
  @media (max-width: 1000px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 90px;
    position: relative;
  }
  &:hover {
    transition: 200ms ease-in;
    transform: scale(1.5);
  }
`;
export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Row = styled.div`
  display: grid;
  row: 5;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: yellow;
    transition: 200ms ease-in;
    transform: scale(1.5);
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
