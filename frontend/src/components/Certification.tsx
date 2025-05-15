import { useState } from "react";
import styled from "styled-components";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { CreateUser } from "../api/User";

export const Certification = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(`location.state: ${location.state}`)
  
  //onclick関数   
  const onclicksendCode = async ()=>{
    const response_data = await CreateUser(location.state, code);
        if (response_data) {
           navigate("/");
        } else {
            alert("通信エラーが発生しました。お手数ですが最初からやり直してください");
        }
  }
  
  return (
    <SWrapper>
      <SFrame>
        <STitle>e-mailに届いた認証コードを入力してください</STitle>

        <SInputArea>
          <label htmlFor="code">認証コード</label>
          <SInput
            type="text"
            id="code"
            value={code}
            onChange={(evt) => setCode(evt.target.value)}
          />
        </SInputArea>

        <SButtonWrapper>
          <Button type="button" onClick={onclicksendCode}>Send</Button>
        </SButtonWrapper>

        <SLink to="/signin">signIn画面へ戻る</SLink>
      </SFrame>
    </SWrapper>
  );
};

// 画面全体をセンタリング
const SWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding-top: 80px;
  background-color: #eeeeee;
`;

// 中央のカード
const SFrame = styled.div`
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

const STitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
`;

const SInputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 8px;
    font-size: 14px;
  }
`;

const SInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const SButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 60%;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #45a049;
  }
`;

const SLink = styled(Link)`
  display: block;
  margin: 0 auto;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  text-align: center;
`