import styled from 'styled-components'

export const ProfileWrap = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
`
export const ProfileContents = styled.div`
  background-color: #f5b411;
  padding: 50px 100px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  & h1{
    font-size: 36px;
    font-weight: 700;
    color: #0B1761;
  }
  & >input{
    height: 24px;
    outline: none;
    text-indent: 5px;
  }
`
export const AvatarTag = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  & img{
    width: 100%;
    height: 100%;
    background-size: contain;
  }
  & label >input{
    display: none;
  }
`
export const NickNameStyle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #0B1761;
`
export const UserIdStyle = styled.p`
  font-size: 16px;
  color: rgba(11,23,97, 0.7);
`
export const ProfileBtnStyle = styled.button`
  background-color: #0B1761;
  color: #fff;
  padding: 10px 0;
  cursor: pointer;
  display: inline-block;
`

export const BtnWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  & button{
    padding: 10px 15px;
  }
`