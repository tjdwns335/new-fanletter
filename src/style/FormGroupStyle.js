import styled from 'styled-components';
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 40%;
  background-color: #e2e2e2;
  margin-bottom: 30px;
`

export const SectionStyle = styled.section`
  margin-bottom: 30px;
  height: 100%;
  display: flex;
  align-items: center;
`
export const LabelStyle = styled.label`
  display: inline-block;
  width: 10%;
  margin-right: 5%;
  height: 100%;
`

export const TextareaStyle = styled.textarea`
  resize: none;
  height: 80px;
  width: 75%;
`
export const SecondLabel = styled.label`
  margin-right: 3%;
`

export const FormButton = styled.div`
  text-align: right;
  button{
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #16f397;
    color: #333;
    margin-bottom: 10px;
    margin-right: 10px;
    border-color: transparent;
    &:hover{
      background-color: #fff;
    }
  }
`