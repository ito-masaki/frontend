import axios from "axios";

//DBへ投稿内容を格納
export const Post_text = async (user_id: string, token: string, msg: string)=>{
    const url = `http://localhost:3000/post`;
    const body_data = {
        message: msg
    }
    const response = await axios.post(url, body_data, {params: {user_id: user_id, token: token}});
    console.log(JSON.stringify(response, null, 2));
}