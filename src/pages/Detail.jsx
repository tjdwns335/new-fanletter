import React, { useState } from 'react'
import defaultUser from "assets/defaultuser.jpg";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getLocationDate } from 'utill/date';
import { useDispatch, useSelector } from 'react-redux';
import { changeLetter, deleteLetter } from 'testRedux/modules/letters';
import {
  AvatarStyle,
  BtnGroup,
  ContentStyle,
  DetailContent,
  HomeBtnStyle,
  MemberStyle,
  NickNameStyle,
  TextareaStyle,
  UserInfoStyle,
  Wrap
} from 'style/DetailStyle';

function Detail() {
  const letters = useSelector((state) => state.letters);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [changeBtn, setChangeBtn] = useState(false);
  const [changeText, setChangeText] = useState('');
  const { createdAt, nickname, avatar, content, writedTo } = letters.find(item => item.id === id);

  const deleteButton = () => {
    const deleteAnswer = window.confirm('삭제하시겠습니까?');
    if (deleteAnswer) {
      navigate("/")
      dispatch(deleteLetter(id));
    }
  }

  const changeDetail = () => {
    if (!changeText) {
      return alert("수정사항이 없습니다!");
    }
    const changeAnswer = window.confirm('수정하시겠습니까?');
    if (changeAnswer) {

      dispatch(changeLetter({ id, changeText }));
      setChangeBtn(false);
      setChangeText('');
    }
  }
  return (
    <Wrap>
      <HomeBtnStyle>
        <Link to="/">
          <button>홈으로</button>
        </Link>
      </HomeBtnStyle>
      <DetailContent>
        <UserInfoStyle>
          <NickNameStyle>
            <AvatarStyle>
              <img src={avatar || defaultUser} alt="아바타 이미지" />
            </AvatarStyle>
            <span>{nickname}</span>
          </NickNameStyle>
          <time>{getLocationDate(createdAt)}</time>
        </UserInfoStyle>
        <MemberStyle>To: {writedTo}</MemberStyle>
        {
          changeBtn ?
            <>
              <TextareaStyle
                defaultValue={content}
                onChange={(e) => setChangeText(e.target.value)}
              />
              <BtnGroup>
                <button onClick={() => setChangeBtn(false)}>취소</button>
                <button onClick={changeDetail}>수정완료</button>
              </BtnGroup>
            </> :
            <>
              <ContentStyle>{content}</ContentStyle>
              <BtnGroup>
                <button onClick={() => setChangeBtn(true)}>수정</button>
                <button onClick={deleteButton}>삭제</button>
              </BtnGroup>
            </>
        }
      </DetailContent>
    </Wrap>
  )
}

export default Detail;


