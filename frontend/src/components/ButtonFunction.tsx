import { useContext } from "react";
import { PostContext, PostType } from "../providers/PostProvider";
import { UserContext } from "../providers/UserProvider";
import { getList } from "../api/Post";

export const ButtonFunction = () => {
    const { setComments, commentNumber, setCommentNumber } = useContext(PostContext);
    const { userinfo } = useContext(UserContext);

    const ChangePostList = async (num: number) => {
        let newNumber = commentNumber + num;
        if (newNumber < 0) {
            newNumber = 0;
        }
        if(num == 0){
            newNumber = 0;
        }

        const posts = await getList(userinfo.token, newNumber);
        let PostList: PostType[] = [];
        if (posts) {
            posts.forEach((element: any) => {
                PostList.push({
                    id: element.id,
                    user_name: element.user_name,
                    content: element.content,
                    created_at: new Date(element.created_at),
                });
            });
        }
        setComments(PostList);
        setCommentNumber(newNumber);
    };

    return (
        <div>
            {/* アロー関数を使ってonClickに渡す */}
            <button onClick={() => ChangePostList(10)}>前の10件</button>
            <button onClick={() => ChangePostList(-10)}>次の10件</button>
            <button onClick={() => ChangePostList(0)}>リロード🔄</button>
        </div>
    );
};
