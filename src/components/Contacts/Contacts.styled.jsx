import styled from '@emotion/styled';

export const ContactsList = styled.ul`
padding: 0;
`
export const ContactsListEl = styled.li`
align-items: center;
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 20px;
margin-top: 15px;
list-style: none;
`
export const ContactsBtn = styled.button`
margin-left: 30px;
font-size: 20px;
padding: 8px;
border-radius: 10px;
border: none;
box-shadow: -2px 2px 4px 1px rgba(34, 60, 80, 0.37);
:hover {
    background-color: green;
}
`
