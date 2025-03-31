import { useContext, useState } from "react"
import { Auth_signIn } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

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
        <div>
            <div>
                <label htmlFor="id">ID</label>
                <input id="id" value={username} type="text" onChange={(evt)=>{ setUsername(evt.target.value) }}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" value={pass} type="text" onChange={(evt)=>{ setPass(evt.target.value) }}/>
            </div>
            <div>
                <button type="button" onClick={onClickSignIn}>Login</button>
            </div>
        </div>
    )
}