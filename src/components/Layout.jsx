import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logout } from 'testRedux/modules/authSlice';
import { LayoutHeaderStyle } from 'style/LayouStyle';
import { toast } from 'react-toastify';


function Layout() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    const tokenTest = () => {
      if (!accessToken) {
        dispatch(logout());
        toast.warn("토큰 만료 시간이 다 됐습니다");
      }
    }
    tokenTest();
  }, [accessToken])

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

