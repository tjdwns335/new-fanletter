import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(226,226,226, 0.7);
`
export const LoginFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  border-radius: 12px;
  background-color: white;
  width: 500px;
`
export const LoginTitleStyle = styled.h1`
  font-size: 36px;
  margin-bottom: 36px;
`

export const LoginInputStyle = styled.input`
  margin-bottom: 24px;
  padding: 12px 0px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid gray;
  outline: none;
`

export const LoginBtnGroupStyled = styled.button`
  cursor: pointer;
  width: 100%;
  font-size: 20px;
  padding: 20px;
  margin-bottom: 20px;
  user-select: none;
  &:hover{
    background-color: #333;
    color: #fff;
  }
`