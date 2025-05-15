import { useNavigate } from "react-router-dom";
import { SignInUser } from "../api/User"
import styled from "styled-components";
import { useState } from "react";

// SignIn画面
export const SignIn = ()=>{
    const navigate = useNavigate()
    
    // 画面入力を保存しておくためのuseSate
    const [user_id, setUser_id] =useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onClickSendMail = async ()=>{
        const response_data = await SignInUser(user_id, email, password);
        if(response_data  == false){
            alert("そのメールアドレスは既に登録されています");
        }
        else{
            navigate('/signin/certification', {replace: true, state: email}); //elementではなを入れるpath
        }
    }

    return(
        <SWrapper>
            <SSignInFrame>
            <SSignInRow>
                    <SSignInLabel>
                        <label htmlFor="id">ID</label>
                    </SSignInLabel>
                    <SSignInInput>
                        <input
                            id="id"
                            value={user_id}
                            type="text"
                            onChange={(evt) =>{setUser_id(evt.target.value)}}
                        />
                    </SSignInInput>
                </SSignInRow>

                <SSignInRow>
                    <SSignInLabel>
                        <label htmlFor="email">email</label>
                    </SSignInLabel>
                    <SSignInInput>
                        <input
                            id="email"
                            value={email}
                            type="text"
                            onChange={(evt) =>{setEmail(evt.target.value)}}
                        />
                    </SSignInInput>
                </SSignInRow>

                <SSignInRow>
                    <SSignInLabel>
                        <label htmlFor="pass">password</label>
                    </SSignInLabel>
                    <SSignInInput>
                        <input
                            id="pass"
                            value={password}
                            type="text"
                            onChange={(evt) =>{setPassword(evt.target.value)}}
                        />
                    </SSignInInput>
                </SSignInRow>

                <SSignInRow>
                    <SSignInButton type="button" onClick={onClickSendMail}>SignIn</SSignInButton>
                </SSignInRow>

                <A href="/">login画面へ戻る</A>
            </SSignInFrame>
        </SWrapper>
    )
}

// 画面全体をセンタリング
const SWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background-color: #eeeeee; /* 背景を薄いグレーにする */
  padding-top: 80px; /* ← 上に80px分の隙間を作る */
`;

// 中央のカード
const SSignInFrame = styled.div`
  background-color: #ffffff;
  padding: 30px 150px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 320px;
`;

// 各行のレイアウト
const SSignInRow = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
`;

// IDとPasswordラベル
const SSignInLabel = styled.span`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: #333333;
`;

// 入力欄
const SSignInInput = styled.span`
  display: block;

  input {
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
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
// ログイン画面への遷移url
const A = styled.a`
  display: block;
  text-align: right;`