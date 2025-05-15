import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../providers/UserProvider";
import { getUser } from "../api/User";
import  styled  from "styled-components";
export const Header = ()=>{
    const navigate = useNavigate();
    const {userinfo, setUserinfo} = useContext(UserContext);
    const [ userName, setUserName ] = useState("");

    useEffect(()=>{
        const GetmyUser = async ()=>{
            const name = userinfo.id !== null ? userinfo.id : 0; //三項演算子
            const user = await getUser(name, userinfo.token);
            setUserName(user.name);
        }
        GetmyUser();
    },[]);

    const LogoutOnClick = ()=>{
        setUserinfo({id: 0, token: ""});
        navigate("/");
    };

    return(
        <SHeader>
            <SLogo>MicroPost</SLogo>
            <SRightItem>
                <SName>{userName}</SName>
                <SLogout onClick={LogoutOnClick}>ログアウト</SLogout>
            </SRightItem>
        </SHeader>
    )
}

const SHeader = styled.div`
  background-color: #222222;
  display: flex;
  flex-direction: row;
  color: #F8F8F8;
  padding-left: 8px;
  padding-right: 8px;
  height: 100%;
`
const SLogo = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  justyify-content: start;
`
const SRightItem = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`
const SName = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  margin-right: 8px;
`
const SLogout = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
`