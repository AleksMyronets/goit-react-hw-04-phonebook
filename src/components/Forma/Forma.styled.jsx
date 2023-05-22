import styled from '@emotion/styled';

export const Input = styled.input`
  width: 300px;
  height: 30px;
  display: block;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  box-shadow: -2px 2px 4px 1px rgba(34, 60, 80, 0.37);
  outline: none;
  :hover,
  :focus {
    border: 2px solid green;
  }
`;

export const FormBtn = styled.button`
  margin: 0 auto;
  display: block;
  background-color: #dbe041;
  margin-top: 30px;
  font-size: 30px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: -2px 2px 4px 1px rgba(34, 60, 80, 0.37);
  :hover {
    background-color: green;
  }
`;