import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  & input {
    padding: 5px;
    font-size: 16px;
  }
  & button {
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px 15px;
    background-color: orange;
    cursor: pointer;
    font-weight: 700;
    &:hover,
    &:focus {
      background-color: green;
    }
  }
`;