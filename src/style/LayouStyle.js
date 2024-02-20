import styled from 'styled-components';

export const LayoutHeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  background-color: #f5b411;
  padding: 30px 100px;
  user-select: none;
  & a{
    text-decoration: none;
    color: #0B1761;
    &:hover{
      color: #16f397;
    }
  }
  & span{
    margin-left: 30px;
    cursor: pointer;
    color: #0B1761;
    &:hover{
      color: #16f397;
    }
  }
`