import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import {
  AvatarTag,
  BtnWrapper,
  NickNameStyle,
  ProfileBtnStyle,
  ProfileContents,
  ProfileWrap,
  UserIdStyle
} from 'style/ProfileStyle';
import { __changeProfile } from 'testRedux/modules/authSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const { avatar, nickname, userId } = useSelector((state) => state.auth);
  const [change, setChange] = useState(false);
  const [changeText, setChangeText] = useState(nickname);
  const [imageSelect, setImageSelect] = useState(avatar);
  const [fileSelect, setFileSelect] = useState(null);

  const onChangeImage = (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setFileSelect(file)
    if (file) {
      let image = window.URL.createObjectURL(file);
      setImageSelect(image);
    }
  }

  const doneClickHandler = () => {
    const formData = new FormData();
    if (changeText) {
      formData.append("nickname", changeText);
    }
    if (imageSelect !== avatar) {
      formData.append("avatar", fileSelect);
    }
    dispatch(__changeProfile(formData));
    setChange(false);
    toast.success("프로필 변경 완료")
  }

  return (
    <ProfileWrap>
      <ProfileContents>
        <h1>프로필 관리</h1>
        {change ?
          <>
            <AvatarTag>
              <label>
                <img src={imageSelect} alt="아바타 이미지" />
                <input
                  type="file"
                  onChange={onChangeImage}
                  accept="image/*"
                />
              </label>
            </AvatarTag>
            <input
              type="text"
              defaultValue={nickname}
              onChange={(e) => { setChangeText(e.target.value) }}
            />
            <UserIdStyle>{userId}</UserIdStyle>
            <BtnWrapper>
              <ProfileBtnStyle onClick={() => setChange(false)}>취소</ProfileBtnStyle>
              <ProfileBtnStyle onClick={doneClickHandler}>수정완료</ProfileBtnStyle>
            </BtnWrapper>
          </> : <>
            <AvatarTag>
              <img src={imageSelect} alt="아바타 이미지" />
            </AvatarTag>
            <NickNameStyle>{changeText}</NickNameStyle>
            <UserIdStyle>{userId}</UserIdStyle>
            <ProfileBtnStyle onClick={() => setChange(true)}>수정하기</ProfileBtnStyle>
          </>
        }
      </ProfileContents>
    </ProfileWrap>
  )
}


