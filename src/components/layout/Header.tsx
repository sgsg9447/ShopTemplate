import { useRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../recoil";
import { Link, useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #dde0ea;
`;

const ContentsBox = styled.div`
  display: flex;
  height: 100%;
  width: 95%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
  li + li {
    margin-left: 30px;
  }
`;

const Header = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const handleClickLogin = async () => {
    if (!user) {
      navigate("/login");
    } else {
      logout();
      console.log("logout");
    }
  };

  function logout() {
    setUser(null);
  }

  return (
    <StyledHeader>
      <ContentsBox>
        <Link to="/">Logo</Link>
        {user ? (
          <Nav>
            <ul>
              <li>Bookmark</li>
              <Link to="/admin">Admin</Link>
              <li onClick={handleClickLogin}>{user}</li>
            </ul>
          </Nav>
        ) : (
          <Nav>
            <ul>
              <li>Bookmark</li>
              <Link to="/admin">Admin</Link>
              <li>SingUp</li>
              <li onClick={handleClickLogin}>Login</li>
            </ul>
          </Nav>
        )}
      </ContentsBox>
    </StyledHeader>
  );
};
export default Header;
