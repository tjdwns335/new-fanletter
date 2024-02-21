import useInput from 'customHook/useinput';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from 'testRedux/modules/authSlice';
import { authApi } from 'api/apiGroup';
import {
  Background,
  LoginBtnGroupStyled,
  LoginFormStyle,
  LoginInputStyle,
  LoginTitleStyle
} from 'style/LoginStyled';



function Login() {
  const [loginMode, setLoginMode] = useState(true);
  const [id, onChangeIdHandler, setId] = useInput('');
  const [password, onChangePasswordHandler, setPassword] = useInput('');
  const [nickname, onChangeNicknamedHandler, setNickname] = useInput('');
  const dispatch = useDispatch();

  const onClickLoginButton = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("ID를 입력해주세요");
      return;
    }
    if (!password) {
      alert("password를 입력해주세요");
      return;
    }
    if (loginMode) {
      try {
        const { data } = await authApi.post("/login", {
          id, password
        });
        const { accessToken, avatar, nickname, userId } = data;
        if (data.success) {
          if (id && password) {
            dispatch(login({ accessToken, avatar, nickname, userId }));
            toast.success("로그인 성공");
          }
        };
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      try {
        const { data } = await authApi.post("/register", {
          id, password, nickname
        });
        if (data.success) {
          setLoginMode(true);
          setId('');
          setPassword('');
          setNickname('');
          toast.success("회원가입 성공");
        };
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }
  const onClickSignUpButton = (e) => {
    e.preventDefault();
    setLoginMode(prev => !prev);
  }
  return (
    <Background>
      <LoginFormStyle>
        <LoginTitleStyle>{loginMode ? "로그인" : "회원가입"}</LoginTitleStyle>
        <LoginInputStyle
          type="text"
          placeholder='아이디(4-10글자)'
          minLength="4"
          maxLength="10"
          value={id}
          onChange={onChangeIdHandler}
        />
        <LoginInputStyle
          type="text"
          placeholder='비밀번호(5-15글자)'
          minLength="5"
          maxLength="15"
          value={password}
          onChange={onChangePasswordHandler}
        />
        {!loginMode && <LoginInputStyle
          type="text"
          placeholder='닉네임(1-10글자)'
          minLength="1"
          maxLength="10"
          value={nickname}
          onChange={onChangeNicknamedHandler}
        />}
        <LoginBtnGroupStyled onClick={onClickLoginButton}>{loginMode ? "로그인" : "회원가입"}</LoginBtnGroupStyled>
        <LoginBtnGroupStyled onClick={onClickSignUpButton}>{loginMode ? "회원가입" : "로그인"}</LoginBtnGroupStyled>
      </LoginFormStyle>
    </Background>
  )
}

export default Login;

