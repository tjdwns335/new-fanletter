배포 URL : https://new-fanletter.vercel.app/
## 인증 서비스가 들어간 그룹 아티스트 팬레터함을 만들어 보자
숙련주차 개인과제에서 각자 본인이 작성한 홈화면과 상세화면에 이어서 인증시스템을 적용시킨 서비스로 발전시켜 봅시다.

## 필수 구현 사항
- 홈 화면 UI 구현 (Create, Read)
    - **본인이 제출한 숙련과제 코드에 이어서 진행 (일부 못한 분은 이 기회에 캐치업해보세요!)**
    - 팬레터 추가폼에서 닉네임 입력값이 아닌 회원가입 시 또는 프로필관리 시 적용한 닉네임 적용
- 상세 화면 UI 구현 (Read, Update, Delete)
    - **본인이 제출한 숙련과제 코드에 이어서 진행 (일부 못한 분은 이 기회에 캐치업해보세요!)**
    - 본인이 작성한 팬레터에서만 수정, 삭제 가능
- 로그인/회원가입 UI 구현
    - 로그인 해야만 팬레터 화면으로 진입 가능
- 프로필관리 UI 구현
    - 프로필 이미지, 닉네임 변경 기능 구현
 
## 권장 사항
- [ ]  팬레터 CRUD 를 위한 API 통신은 json-server 를 이용해 주세요 (firebase firestore 사용X)
- [ ]  인증과 프로필관리를 위한 API 통신은 제공된 jwt 인증서버를 이용해 주세요 (firebase authentication 사용 X)
- [ ]  fetch API 대신 axios 를 이용해 주세요
- [ ]  전역 스타일에 reset.css 를 적용해주고 box-sizing이 border-box가 되도록 설정 (스타일링 방식은 자유지만 일관성 있게 작업할 것)
- [ ]  Redux 사용 시 반드시 Redux Toolkit 을 이용해 주세요

## 선택 구현 사항
- redux-thunk 를 이용한 API 통신 로직을 react-query 로 리팩터링
    
    > 주의! react-query 적용은 필수기능이 모두 끝난 이후에 “react-query” 브랜치를 별도로 생성해서 작업해 주세요.
    > 
- Custom Hook 구현
    - 함수 컴포넌트 내에서 복잡한 상태변경 로직을 가지고 있거나 관리해야 할 상태 개수가 많다면 커스텀훅에서 대신 처리하도록 해봅시다.
- 모달 구현
    - window.alert 이나 window.conform 대신 직접 구현한 모달을 적용해 봅시다.
- 새로고침 UI 유지
    - 로컬스토리지를 이용해 봅시다.
- 검색 기능 구현
    - query string을 적용해 봅시다. (ex. http://localhost:3000?search=에스파)
    - react-router-dom의 useSearchParams를 이용해 보세요.
    - 별도의 검색버튼없이 실시간 검색구현을 한다면 deboucing 을 적용해 봅시다.
- 팬레터 상세화면에 댓글 기능 구현
