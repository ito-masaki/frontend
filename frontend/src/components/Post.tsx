import React, { ReactNode, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";
import { delete_comment } from "../api/Post";
import { PostContext, PostType } from "../providers/PostProvider";

export const Post = (props :any)=>{
	const {post} = props;
	const {userinfo} = useContext(UserContext);
	const {setComments, commentNumber} = useContext(PostContext);

	// Dateオブジェクトを受け取って、日本語表記に変換したものを返す
	const getDateStr = (DateObject :Date) =>{
		const year = DateObject.getFullYear();
		const month = DateObject.getMonth()+1;
		const date = DateObject.getDate();
		const hour = DateObject.getHours();
		const min = post.created_at.getMinutes();
		const sec = post.created_at.getSeconds();
		return `${year}年${month}月${date}日 ${hour}時${min}分${sec}秒`;
	}


	const getLines = (src :string) :ReactNode =>{
		const arry = src.split("\n");
		return arry.map((line, index) =>{
			return (
				<React.Fragment  key={index}>
					{line}
					<br />
				</React.Fragment>
			);
		});
	}

	const OnclickDelete = async ()=>{
		
		const response = await delete_comment(userinfo.token, post.Post_id, commentNumber);
		let post_list: PostType[] = [];
		if(response){
			response.forEach((element :any) => {
				post_list.push({
					Post_id: element.id,
                    user_id: element.user_id,
                    user_name: element.user_name,
                    content: element.content,
                    created_at: new Date(element.created_at),
				});
			});
		}
		setComments(post_list);
	}

	return (
	<SPost>
		<div>
			<SNumber>#{post.Post_id}</SNumber>
			<SName>{post.user_name}</SName>
			<SDate>{getDateStr(post.created_at)}</SDate>
			<span>{post.user_id === userinfo.id ? <SButton onClick={OnclickDelete}>削除</SButton> : null}</span>
		</div>
		<div>{getLines(post.content)}</div>
    </SPost>
	);
}

const SPost = styled.div`
  margin: 8px 0px;
  border-bottom: 1px solid #AAAAAA;
  text-align: left;
  padding-left: 8px;
`
const SNumber = styled.span`
  font-size: small;
  color: #000044;
`
const SName = styled.span`
  margin-left: 8px;
  font-size: small;
  color: #000044;
`
const SDate = styled.span`
  margin-left: 8px;
  font-size: small;
  color: #000044;
`

const SButton = styled.button`
  margin-left: 8px;
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-size: small;
  color: blue;
  padding: 0px;
`