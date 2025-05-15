import styled from "styled-components";
import { useState } from "react";
import { Sendpass } from "../api/User";
import { useNavigate, useLocation } from "react-router-dom";

export const SetNewPassword = () => {
    const [pass, setPass] = useState("");
    const location = useLocation(); // 現在のURL情報を取得
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search); // クエリパラメータを解析
    const token = queryParams.get('token'); // 'token' パラメータを取得

    // パスワード変更処理
    const OnClickChangePass = async () => {
        if (token) { // token が null でない場合のみ処理を実行
            try {
                const result = await Sendpass(pass, token);
                console.log(result); // 成功時の結果を表示
                navigate("/");
                if (result) {
                    alert("パスワードが正常に変更されました");
                } else {
                    alert("パスワードの変更に失敗しました");
                }
            } catch (error) {
                console.error("パスワードの変更に失敗しました:", error);
            }
        } else {
            console.error("トークンが無効です");
        }
    };

    return (
        <Container>
            <Title>新しいパスワード設定</Title>
            <Form>
                <Label htmlFor="password">新しいパスワード</Label>
                <Input
                    type="password"
                    id="password"
                    value={pass}
                    onChange={(evt) => setPass(evt.target.value)}
                    placeholder="8文字以上で入力"
                    required
                />
                <Button type="button" onClick={OnClickChangePass}>送信</Button>
            </Form>
        </Container>
    );
};

// styled-components
const Container = styled.div`
    max-width: 400px;
    margin: 80px auto;
    padding: 40px;
    background-color: #fff;
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
    background-color: #28a745;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.25s ease;
    &:hover {
        background-color: #218838;
    }
`;

