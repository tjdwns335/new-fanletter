import styled from 'styled-components';

export const ListWrap = styled.ul`
  background-color: #333;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 12px;
  border-radius: 12px;
  color: #fff;
`
export const LetterWrap = styled.li`
  display:flex;
  flex-direction: column;
  gap:12px;
  color: #faeded;
  padding: 12px;
  border: 1px solid #faeded;
  border-radius: 12px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover{
    transform: scale(1.03);
  }
`
export const UserInfoStyle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`
export const AvatarStyle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const NickNameStyle = styled.div`
  display: flex;
  flex-direction:column;
  gap:6px;
`
export const ContentStyle = styled.p`
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 12px;
  margin-left: 62px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
`