import { createContext, ReactNode, useState } from "react";

export type PostType = {
    Post_id: number;
    user_id: number;
    user_name: string;
    content: string;
    created_at: Date;
}

// useContextの型(大体オブジェクト型で定義)
type PostContextType = {
    comments: PostType[],
    setComments :React.Dispatch<React.SetStateAction<PostType[]>>
    commentNumber: number;
    setCommentNumber :React.Dispatch<React.SetStateAction<number>>
}

// useContextの初期値(type通りにオブジェクトに値を入れていくだけ)
export const PostContext = createContext<PostContextType>({
    comments: [],
    setComments: ()=>{},
    commentNumber: 0,
    setCommentNumber: ()=>{}
})

// 受け取るpropsの型定義
type PostProviderProps = {
    children: ReactNode;
};

export const PostProvider = ({ children }: PostProviderProps)=>{
    const [comments, setComments] = useState<PostType[]>([]);
    const [commentNumber, setCommentNumber] = useState<number>(0);
    return(
        <PostContext.Provider value={{comments, setComments, commentNumber, setCommentNumber}}>
            {children}
        </PostContext.Provider>
    );
}