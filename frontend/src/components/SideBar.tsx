import { useContext, useState } from "react"
import { UserContext } from "../providers/UserProvider";
import { getList, Post_text } from "../api/Post";
import styled from "styled-components";
import { PostContext, PostType } from "../providers/PostProvider";

//sideバーの部分、comments入力画面
export const SideBar = () => {
    const {userinfo} = useContext(UserContext);
    const {setComments} = useContext(PostContext);
    const [msg, setMsg] = useState("");
    
    // PostListを取ってきてComments(表示する内容のPost配列)を更新
    const getPostList = async ()=>{
        const posts = await getList(userinfo.token);
        let PostList :PostType[] = [];
        if(posts) {
            posts.forEach((element:any) => {
                PostList.push({
                    id:element.id,
                    user_name: element.user_name,
                    content: element.content,
                    created_at: new Date(element.created_at),   
                });
            });
        }
        setComments(PostList);
    }
    
    const onSendClick = async ()=>{
      console.log(String(userinfo.id), userinfo.token, msg);
      await Post_text(String(userinfo.id), userinfo.token, msg);
      await getPostList();
    }

    return(
    <SSideBar>
        <SSideBarRow>hoge</SSideBarRow>
        <SSideBarRow>hoge@example.com</SSideBarRow>
        <SSideBarRow>
            <SSideBarTextArea rows={4} value={msg} onChange={(evt) =>{ setMsg(evt.target.value) }} />
        </SSideBarRow>
        <div>
            <SSideBarButton onClick={onSendClick}>送信</SSideBarButton>
        </div>
    </SSideBar>
    )
}

const SSideBar = styled.div`
    border: solid 1px #8f613c;
    height: 50%;
    padding: 8px;
`
const SSideBarRow = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  text-align: left;
`
const SSideBarTextArea = styled.textarea`
  border-radius: 4px;
  box-shadow: inset 0 2px 4px #CCCCCC;
`
const SSideBarButton = styled.button`
  background-color: #222222;
  padding: 4px;
  border-radius: 8px;
  color: #FAFAFA;
  width: 100%;
`
