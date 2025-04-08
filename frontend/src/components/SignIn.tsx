import { useContext, useState } from "react"
import { Auth_signIn } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import styled from "styled-components";

// signIn画面で動いているプログラム
export  const SignIn = ()=>{
    const [username, setUsername] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const { setUserinfo } = useContext(UserContext);
    const navigate = useNavigate();

    //Loginボタンクリックでこの関数が実行される
    const onClickSignIn = async ()=>{
        const response_data = await Auth_signIn(username, pass);
        if(response_data && response_data.token){
            // idとtokenを保存
            setUserinfo({id: response_data.user_id ,token: response_data.token});
            navigate(`/main`);
        }
        else {
            alert("nameまたはpasswordが間違っています");
        }
    }

    return (
        <SSignInFrame>
            <SSignInRow>
                <SSignInLabel>
                    <label htmlFor="id">ID</label>
                </SSignInLabel>
                <SSignInInput>
                    <input id="id" value={username} type="text" onChange={(evt)=>{ setUsername(evt.target.value) }}/>
                </SSignInInput>
            </SSignInRow>

            <SSignInRow>
                <SSignInLabel>
                    <label htmlFor="password">Password</label>
                </SSignInLabel>
                <SSignInInput>
                    <input id="password" value={pass} type="text" onChange={(evt)=>{ setPass(evt.target.value) }}/>
                </SSignInInput>
            </SSignInRow>

            <SSignInRow>
                <SLoginButton type="button" onClick={onClickSignIn}>Login</SLoginButton>
            </SSignInRow>
            
        </SSignInFrame>
    )
}

const SSignInFrame = styled.div`
  background-color: #f8f8f8;
  margin: 80px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 8px 8px #aaaaaa;
`;



const SSignInRow = styled.div`
  display: block;
  margin-top: 4px;
  margin-bottom: 4px;
`;



const SSignInLabel = styled.span`
  display: inline-block;
  width: 25%;
  vertical-align: top;
  text-align: right;
  margin-right: 4px;
`;

const SSignInInput = styled.span`
  display: inline-block;
  width: auto;
  vertical-align: top;
  margin-left: 4px;
`;

const SLoginButton = styled.button`
  background-color: #444444;
  color: #f0f0f0;
  padding: 4px 16px;
  border-radius: 8px;
  display: inline-block;
  vertical-align: top;
  text-align: auto;
`;