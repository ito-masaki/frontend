import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../providers/UserProvider";
import { getUser } from "../api/User";

export const Header = ()=>{
    const navigate = useNavigate();
    const {userinfo, setUserinfo} = useContext(UserContext);
    const [ userName, setUserName ] = useState("");

    useEffect(()=>{
        const GetmyUser = async ()=>{
            const name = userinfo.id !== null ? userinfo.id : 0; //三項演算子
            const user = await getUser(name, userinfo.token);
            setUserName(user);
        }
        GetmyUser();
    },[]);

    const LogoutOnClick = ()=>{
        setUserinfo({id: 0, token: ""});
        navigate("/");
    };

    return(
        <div>
            <span>MicroPost</span>
            <span>{userName}</span>
            <button onClick={LogoutOnClick}>ログアウト</button>
        </div>
    )
}