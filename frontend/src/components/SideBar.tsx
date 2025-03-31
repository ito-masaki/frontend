import { useContext, useState } from "react"
import { UserContext } from "../providers/UserProvider";


export const SideBar = () => {
    const {userinfo} = useContext(UserContext);
    const [msg, setMsg] = useState("");
    
    const onSendClick = ()=>{
        // postの処理を書いておく
    }

    return(
    <div>
        <div>hoge</div>
        <div>hoge@example.com</div>
        <div>
            <textarea rows={4} value={msg} onChange={(evt) =>{ setMsg(evt.target.value) }}></textarea>
        </div>
        <div>
            <button onClick={onSendClick}>送信</button>
        </div>
    </div>
    )
}