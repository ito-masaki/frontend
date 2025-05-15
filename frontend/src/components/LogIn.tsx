import { useContext, useState } from "react";
import { Auth_LogIn } from "../api/Auth";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import styled from "styled-components";

// LogIn画面で動いているプログラム
export const LogIn = () => {
    const [username, setUsername] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const { setUserinfo } = useContext(UserContext);
    const navigate = useNavigate();

    // Loginボタンクリックでこの関数が実行される
    const onClickLogIn = async () => {
        const response_data = await Auth_LogIn(username, pass);
        if (response_data && response_data.token) {
            // idとtokenを保存
            setUserinfo({ id: response_data.user_id, token: response_data.token });
            navigate(`/main`);
        } else {
            alert("nameまたはpasswordが間違っています");
        }
    };

    const onClickSignIn = async () => {
        navigate(`/signin`);
    };

    return (
        <SWrapper>
            <SLogInFrame>
                <SLogInRow>
                    <SLogInLabel>
                        <label htmlFor="id">ID</label>
                    </SLogInLabel>
                        <SLogInInput
                            id="id"
                            value={username}
                            type="text"
                            onChange={(evt) => { setUsername(evt.target.value) }}
                        />
                </SLogInRow>

                <SLogInRow>
                    <SLogInLabel>
                        <label htmlFor="password">Password</label>
                    </SLogInLabel>
                        <SLogInInput
                            id="password"
                            value={pass}
                            type="password"
                            onChange={(evt) => { setPass(evt.target.value) }}
                        />
                </SLogInRow>

                <SLogInRow>
                    <SLoginButton type="button" onClick={onClickLogIn}>Login</SLoginButton>
                </SLogInRow>

                <SSignInRow>
                    <SSignInButton type="button" onClick={onClickSignIn}>SignIn</SSignInButton>
                </SSignInRow>
                <SLink to="/Reset">パスワード再設定</SLink>
            </SLogInFrame>
        </SWrapper>
    );
};

// 画面全体をセンタリング
const SWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background-color: #eeeeee; /* 背景を薄いグレーにする */
  padding-top: 80px; /* ← 上に80px分の隙間を作る */
`;

// 中央のカード
const SLogInFrame = styled.div`
  background-color: #ffffff;
  padding: 30px 150px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

// 各行のレイアウト
const SLogInRow = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
`;

// IDとPasswordラベル
const SLogInLabel = styled.span`
  margin-bottom: 4px;
  font-weight: bold;
  color: #333333;
`;

// 入力欄
const SLogInInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
`;

// ログインボタン
const SLoginButton = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// サインインボタン
const SSignInButton = styled.button`
  width: 100%;
  background-color: #2196f3;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`;

const SSignInRow = styled.div`
  margin-top: 8px;
`;

const SLink = styled(Link)`
  display: block;
  text-align: right;`

