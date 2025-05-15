import { useState } from "react";
import styled from "styled-components";
import { Reset_passwaord } from "../api/User";
import { useNavigate } from "react-router-dom";

// パスワード再設定のためのメアド入力画面
export const ResetPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const onclicksendmail = async () => {
    const response = await Reset_passwaord(email);
    navigate("/");
    if (response === true) {
      alert("メールを送信しました。メールを確認してください。");    
    }
    else {
      alert("そのメールアドレスは登録されていません");
    }
  };

  return (
    <Container>
      <Title>パスワードの再設定を行う<br />メールアドレスを入力してください</Title>
      <Form>
        <Label htmlFor="email">メールアドレス</Label>
        <Input type="email" id="email"  value={email} onChange={(evt)=>{setEmail(evt.target.value)}} required />
        <Button type="button" onClick={onclicksendmail}>送信</Button>
      </Form>
      <A href="/">login画面へ戻る</A>
    </Container>
  );
};


// styled-components
const Container = styled.div`
  max-width: 400px;
  margin: 80px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007BFF;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.25s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const A = styled.a`
  display: block;
  text-align: right;`
