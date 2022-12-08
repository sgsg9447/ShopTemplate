import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";

const { Kakao } = window;

const KakaoRedirectHandler = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";
    let client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${process.env.REACT_APP_FRONTEND_BASE_URL}/login/kakao&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log("res", res);
        Kakao.Auth.setAccessToken(res.data.access_token);
        console.log("res2", res);
        Kakao.API.request({
          url: "/v2/user/me",
          data: {
            property_keys: ["kakao_account.email", "kakao_account.gender"],
          },
        })
          .then(function (response: any) {
            console.log(response);
            setUser(response.kakao_account.email);
          })
          .catch(function (error: any) {
            console.log(error);
          });
      });
  }, []);
  return <div>kakao login 완료 Id값은? </div>;
};

export default KakaoRedirectHandler;
