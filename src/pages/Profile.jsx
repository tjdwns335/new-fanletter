import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  AvatarTag,
  NickNameStyle,
  ProfileBtnStyle,
  ProfileContents,
  ProfileWrap,
  UserIdStyle
} from 'style/ProfileStyle';

export default function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.auth);

  return (
    <ProfileWrap>
      <ProfileContents>
        <h1>프로필 관리</h1>
        <AvatarTag>
          <img src={avatar} alt="아바타 이미지" />
        </AvatarTag>
        <NickNameStyle>{nickname}</NickNameStyle>
        <UserIdStyle>{userId}</UserIdStyle>
        <ProfileBtnStyle>수정하기</ProfileBtnStyle>
      </ProfileContents>
    </ProfileWrap>
  )
}


