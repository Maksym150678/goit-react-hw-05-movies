import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  & li {
    width: 350px;
    align-items: stretch;
  }
  & a {
    font-size: 24px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;