import { useState } from "react"
import { Auth_signIn } from "../api/Auth";
import { useNavigate } from "react-router-dom";

export  const SignIn = ()=>{
    const [userID, setUserID] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const navigate = useNavigate();

    //Loginボタンでこの関数が実行される
    const onClickSignIn = ()=>{
        console.log("click");
        const response = Auth_signIn(userID, pass);
        console.log(`${userID}と${pass}でonclick=>${response}`);
        navigate('/main');  // メイン画面に遷移
        
    }
    return (
        <div>
            <div>
                <label htmlFor="id">ID</label>
                <input id="id" value={userID} type="text" onChange={(evt)=>{ setUserID(evt.target.value) }}/>
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