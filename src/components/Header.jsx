import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderStyle, ListStyle, TitleStyle, UlStyle } from 'style/HeaderStyle';
import { setMember } from 'testRedux/modules/member';

function Header() {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const onActiveMember = (e) => {
    if (e.target === e.currentTarget) return;
    dispatch(setMember(e.target.textContent));
  }
  return (
    <HeaderStyle>
      <TitleStyle>오마이걸 팬레터</TitleStyle>
      <UlStyle onClick={onActiveMember}>
        <ListStyle $activeMember={activeMember}>효정</ListStyle>
        <ListStyle $activeMember={activeMember}>미미</ListStyle>
        <ListStyle $activeMember={activeMember}>유아</ListStyle>
        <ListStyle $activeMember={activeMember}>승희</ListStyle>
        <ListStyle $activeMember={activeMember}>유빈</ListStyle>
        <ListStyle $activeMember={activeMember}>아린</ListStyle>
      </UlStyle>
    </HeaderStyle>
  )

}

export default Header


