import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { EditUser, getUser } from "../api/User";


// プロフィール画面
export const Profile = ()=>{
    const navigate = useNavigate();
    const {userinfo, setUserinfo} = useContext(UserContext)
    if (userinfo.id === null || userinfo.token === null) {
        // ログインしていないときの処理
        return <p>ログインしてください</p>;
    }

    // 画面入力を保存しておくためのuseSate
    const [user_id, setUser_id] =useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [introduction, setIntroduction] = useState("");

    // useEffectでユーザー情報取得（getUserが非同期である前提）
    useEffect(() => {
        const fetchUser = async () => {
            const response_data = await getUser(userinfo.id, userinfo.token);
            setUser_id(response_data.name);
            setEmail(response_data.email);
            setPassword(response_data.password);
            setGender(response_data.gender);
            setIntroduction(response_data.introduction);
        }
        fetchUser();
    },[userinfo])


    const onClickEdit = async ()=>{
        const response = await EditUser(userinfo.id, userinfo.token,  user_id, introduction, gender);
        console.log(response);
        setUserinfo({id: userinfo.id, token: userinfo.token});
    }

    const onclickback = ()=>{
        navigate('/main');
    }

    return(
        <SWrapper>
            <SProfileFrame>
                <Title>プロフィール</Title>
                <SProfileRow>
                    <SProfileLabel>
                        <label htmlFor="id">ID</label>
                    </SProfileLabel>
                    <SProfileInput>
                        <input
                            id="id"
                            value={user_id}
                            type="text"
                            onChange={(evt) =>{setUser_id(evt.target.value)}}
                        />
                    </SProfileInput>
                </SProfileRow>

                <SProfileRow>
                    <SProfileLabel>
                        <label htmlFor="email">email</label>
                    </SProfileLabel>
                    <SProfileInput>
                        <input
                            id="email"
                            value={email}
                            type="text"
                            onChange={(evt) =>{setEmail(evt.target.value)}}
                        />
                    </SProfileInput>
                </SProfileRow>

                <SProfileRow>
                    <SProfileLabel>
                        <label htmlFor="pass">password</label>
                    </SProfileLabel>
                    <SProfileInput>
                        <input
                            id="pass"
                            value={password}
                            type="text"
                            onChange={(evt) =>{setPassword(evt.target.value)}}
                        />
                    </SProfileInput>
                </SProfileRow>

                <SProfileRow>
                    <SProfileLabel>
                        <label htmlFor="gender">gender</label>
                    </SProfileLabel>
                        <label>
                            <input
                            type="radio"
                            name="gender"
                            value="男性"
                            checked={gender === "男性"}
                            onChange={(e) => setGender(e.target.value)}
                            />
                            男性
                        </label>

                        <label>
                            <input
                            type="radio"
                            name="gender"
                            value="女性"
                            checked={gender === "女性"}
                            onChange={(e) => setGender(e.target.value)}
                            />
                            女性
                        </label>

                        <label>
                            <input
                            type="radio"
                            name="gender"
                            value="そのほか"
                            checked={gender === "そのほか"}
                            onChange={(e) => setGender(e.target.value)}
                            />
                            そのほか
                        </label>
                </SProfileRow>

                <SProfileRow>
                    <SProfileLabel>
                        <label htmlFor="introduction">Introduction</label>
                    </SProfileLabel>
                    <SSideBarTextArea rows={4} id="introduction"></SSideBarTextArea>
                </SProfileRow>

                <SProfileButtonRow>
                    <SProfileButton type="button" onClick={onClickEdit}>変更の保存</SProfileButton>
                    <SProfileButton type="button" onClick={onclickback}>戻る</SProfileButton>
                </SProfileButtonRow>

            </SProfileFrame>
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
const SProfileFrame = styled.div`
  background-color: #ffffff;
  padding: 30px 150px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 320px;
`;

// 各行のレイアウト
const SProfileRow = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: left;
`;

// 各行のレイアウト
const SProfileButtonRow = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;
`;


// IDとPasswordラベル
const SProfileLabel = styled.span`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: #333333;
`;

// 入力欄
const SProfileInput = styled.span`
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
const SProfileButton = styled.button`
  width: 45%;
  background-color: #2196f3;
  color: white;
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`;

const Title = styled.h2`
    text-align: center;
    color: #333;
`;

const SSideBarTextArea = styled.textarea`
  width: 100%;
`



// // 各行のレイアウト
// const SProfileRow = styled.div`
//   display: flex;
//   align-items: center; /* 縦中央揃え */
//   margin-top: 12px;
//   margin-bottom: 12px;
// `;
// // IDとPasswordラベル
// const SProfileLabel = styled.span`
//   width: 80px;        // ラベルの横幅固定
//   text-align: right;
//   margin-bottom: 4px;
//   margin-right: 12px; // ラベルと入力欄の間隔
//   font-weight: bold;
//   color: #333333;
//   //background-color: #eeeeee; /* ラベルの背景色 */
// `;