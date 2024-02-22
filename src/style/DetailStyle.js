import styled from 'styled-components'

export const Wrap = styled.div`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const HomeBtnStyle = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  & button{
    font-size: 14px;
    cursor: pointer;
    background-color: #333;
    color: #faeded;
    margin-bottom: 10px;
    margin-right: 10px;
    border-color: transparent;
    padding: 10px;
    font-weight: 700;
    &:hover{
      background-color: #ff4848;
      color: #333;
    }
  }
`

export const DetailContent = styled.div`
  background-color: #333;
  color: #fff;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 700px;
  padding: 30px;
`
export const UserInfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span{
    font-size: 32px;
  }
`
export const NickNameStyle = styled.div`
  display:flex;
  align-items: center;
  gap: 12px;
`

export const MemberStyle = styled.span`
  font-size: 24px;
`
export const ContentStyle = styled.p`
  font-size: 24px;
  padding: 12px;
  background-color: #faeded;
  color: #000;
  border-radius: 10px;
  padding: 30px;
  width: 640px;
  height: 280px;
  font-family: 'Roboto';
`

export const BtnGroup = styled.div`
  display:flex;
  justify-content: flex-end;
  gap:10px;
  button{
    font-size: 14px;
    cursor: pointer;
    background-color: #faeded;
    color: #333;
    margin-bottom: 10px;
    margin-right: 10px;
    border-color: transparent;
    padding: 8px;
    font-weight: 700;
    &:hover{
      background-color: #fff;
      color: #333;
    }
  }
`

export const AvatarStyle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
export const TextareaStyle = styled.textarea`
  font-size: 24px;
  padding: 12px;
  background-color: #faeded;
  color: #000;
  border-radius: 10px;
  padding: 30px;
  resize: none;
  width: 639px;
  height: 280px;
  font-family: 'Roboto';
  line-height: 1.5;
`