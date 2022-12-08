import styled from "styled-components";

const IdBox = styled.div`
  margin-top: 100px;
`;

const PwBox = styled.div``;
const { Kakao } = window;

const loginWithKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: `${process.env.REACT_APP_FRONTEND_BASE_URL}/login/kakao`,
    scope: "profile_nickname,account_email,gender	",
  });
};
const Login = () => {
  return (
    <>
      <IdBox>
        <p>ID</p>
        <input type="text" />
      </IdBox>
      <PwBox>
        <p>PW</p>
        <input type="password" />
      </PwBox>
      <div>
        <button onClick={loginWithKakao}>카카오 로그인하기</button>
      </div>
    </>
  );
};

export default Login;
