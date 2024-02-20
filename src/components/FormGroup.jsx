import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addLetter } from 'testRedux/modules/letters';
import {
  FormButton,
  FormStyle,
  InputStyle,
  LabelStyle,
  SecondLabel,
  SectionStyle,
  TextareaStyle
} from 'style/FormGroupStyle';

function FormGroup() {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState('');
  const [detail, setDetail] = useState('');
  const [member, setMember] = useState("효정");

  const nickNameChangeHandler = (e) => {
    setNickname(e.target.value);
  }
  const detailChangeHandler = (e) => {
    setDetail(e.target.value);
  }
  const addEventHandler = (e) => {
    e.preventDefault();
    if (!nickname || !detail) {
      alert("닉네임과 내용은 필수값입니다.");
    }

    const newLetters = {
      createdAt: Date.now(),
      nickname,
      avatar: null,
      content: detail,
      writedTo: member,
      id: uuid(),
    }
    dispatch(addLetter(newLetters));
    setNickname("");
    setDetail("");
  }

  return (
    <FormStyle>
      <SectionStyle>
        <LabelStyle>닉네임 : </LabelStyle>
        <InputStyle
          type="text"
          placeholder='최대 20글자까지 작성할 수 있습니다. '
          maxLength={20}
          value={nickname}
          onChange={nickNameChangeHandler}
        />
      </SectionStyle>
      <SectionStyle>
        <LabelStyle>내용 : </LabelStyle>
        <TextareaStyle
          value={detail}
          placeholder='최대 100글자까지 작성할 수 있습니다.'
          maxLength={100}
          onChange={detailChangeHandler}
        ></TextareaStyle>
      </SectionStyle>
      <SectionStyle>
        <SecondLabel>누구에게 보내실 건가요?</SecondLabel>
        <select onChange={(e) => setMember(e.target.value)}>
          <option value="효정">효정</option>
          <option value="미미">미미</option>
          <option value="유아">유아</option>
          <option value="승희">승희</option>
          <option value="유빈">유빈</option>
          <option value="아린">아린</option>
        </select>
      </SectionStyle>
      <FormButton>
        <button onClick={addEventHandler}>팬레터 등록</button>
      </FormButton>
    </FormStyle >
  )
}

export default FormGroup

