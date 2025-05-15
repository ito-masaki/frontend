import { useContext } from "react";
import { MainLayout } from "../components/Layout/MainLayout";
import { PostProvider } from "../providers/PostProvider";
import { Navigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export const Main = ()=>{
    const {userinfo} = useContext(UserContext);

    return (

        <PostProvider>
            {
                userinfo.token !== "" ? <MainLayout /> : <Navigate replace to="/" />
            }
        </PostProvider>
        )
    }