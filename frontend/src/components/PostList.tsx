import { useContext, useEffect } from 'react';
import {Post} from './Post';
import styled from "styled-components";
import { PostContext, PostType } from '../providers/PostProvider';
import { UserContext } from '../providers/UserProvider';
import { getList } from '../api/Post';

// 掲示板の画面、Postが表示される
export const PostList = () => {
    // PostListの内容配列
    const {comments ,setComments} = useContext(PostContext);
    // idとtokenのオブジェクト
    const {userinfo} = useContext(UserContext);

    //ポスト一覧を取得する関数
    const getPostList = async ()=>{
        const response_List = await getList(userinfo.token);
        let post_list :PostType[] = [];

        if(response_List){
            response_List.forEach((element :any) => {
                post_list.push({
                    id: element.id,
                    user_name: element.user_name,
                    content: element.content,
                    created_at: new Date(element.created_at),
                });
            });
        }
        setComments(post_list);
    }
    // これを実行したいのは最初の画面表示の時のみ、後はsideバーでPostするたびそちらで更新している
    // 再レンダリング時に実行されないようにする
    useEffect(()=>{
        getPostList()
    }, []);

    return(
        <SPostList>
            <p>PostList</p>
             {comments.map((ele)=>
                <Post key={ele.id} post={ele}/>
            )}
        </SPostList>
    )
}

const SPostList = styled.div`
  margin-top: 16px;
  height: 100%;
  overflow-y: scroll;
`