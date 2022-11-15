import styled from 'styled-components';

export const FormStyles = styled.form`
  margin-bottom: 10px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: rgb(189, 189, 228);
  border-radius: 5px;
  border: 1px solid black;
`;

export const LabelStyles = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputStyles = styled.input`
  margin-top: 5px;
  padding: 5px;

  border-radius: 5px;
  border: 1px solid grey;

`;

export const ButtonStyles = styled.button`
  width: 100px;
  height: 30px;
  
  cursor: pointer;
  border-radius: 5px;

  :hover,
  :focus {
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    background-color: rgb(133, 133, 238);
  }
`;