import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logout } from 'testRedux/modules/authSlice';
import { LayoutHeaderStyle } from 'style/LayouStyle';


function Layout() {
  const dispatch = useDispatch();

  return (
    <>
      <LayoutHeaderStyle>
        <Link to="/">HOME</Link>
        <div>
          <Link to="/profile">내 프로필</Link>
          <span onClick={() => { dispatch(logout()) }}>로그아웃</span>
        </div>
      </LayoutHeaderStyle>
      <Outlet />
    </>
  )
}

export default Layout;

