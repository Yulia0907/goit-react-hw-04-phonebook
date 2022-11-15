import styled from 'styled-components';

export const ListContactsItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

export const ButtonDelete = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  
  :hover,
  :focus {
    background-color: rgb(133, 133, 238);
  }
`;