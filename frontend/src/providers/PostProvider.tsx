import { createContext, ReactNode, useState } from "react";

export type PostType = {
    id: number;
    user_name: string;
    content: string;
    created_at: Date;
}

// useContextの型(大体オブジェクト型で定義)
type PostContextType = {
    comments: PostType[],
    setComments :React.Dispatch<React.SetStateAction<PostType[]>>
}

// useContextの初期値(type通りにオブジェクトに値を入れていくだけ)
export const PostContext = createContext<PostContextType>({
    comments: [],
    setComments: ()=>{}
})

// 受け取るpropsの型定義
type PostProviderProps = {
    children: ReactNode;
};

export const PostProvider = ({ children }: PostProviderProps)=>{
    const [comments, setComments] = useState<PostType[]>([]);

    return(
        <PostContext.Provider value={{comments, setComments}}>
            {children}
        </PostContext.Provider>
    );
}