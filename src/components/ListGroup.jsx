import React from 'react';
import defaultUser from "assets/defaultuser.jpg";
import { getLocationDate } from 'utill/date';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  AvatarStyle,
  ContentStyle,
  LetterWrap,
  ListWrap,
  NickNameStyle,
  UserInfoStyle
} from 'style/ListGroupStyle';

function ListGroup() {
  const letters = useSelector((state) => state.letters);
  const activeMember = useSelector((state) => state.member);
  const filterFakeData = letters.filter(item => item.writedTo === activeMember);
  const navigate = useNavigate();
  return (
    <ListWrap>
      {
        filterFakeData.length === 0 ? <p>{activeMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되보세요!</p> :
          filterFakeData.map((item) => {
            return (
              <LetterWrap key={item.id} onClick={() => navigate(`/detail/${item.id}`)}>
                <UserInfoStyle>
                  <AvatarStyle>
                    <img src={item.avatar ?? defaultUser} alt="아바타 이미지" />
                  </AvatarStyle>
                  <NickNameStyle>
                    <p>{item.nickname}</p>
                    <time>{getLocationDate(item.createdAt)}</time>
                  </NickNameStyle>
                </UserInfoStyle>
                <ContentStyle>
                  {item.content}
                </ContentStyle>
              </LetterWrap>
            )
          })
      }
    </ListWrap>
  )
}

export default ListGroup

