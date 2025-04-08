import React, { ReactNode } from "react";
import styled from "styled-components";

export const Post = (props :any)=>{
	const {post} = props;

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
	return (
	<SPost>
		<div>
			<SName>{post.user_name}</SName>
			<SDate>{getDateStr(post.created_at)}</SDate>
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
const SName = styled.span`
  font-size: small;
  color: #000044;
`
const SDate = styled.span`
  margin-left: 8px;
  font-size: small;
  color: #000044;
`