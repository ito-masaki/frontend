import axios from "axios";

//DBへ投稿内容を格納
export const Post_text = async (user_id: string, token: string, msg: string)=>{
    console.log(`Postする内容${msg}`);
    const url = `http://localhost:3000/post`;
    const body_data = {
        message: msg
    }
    const response = await axios.post(url, body_data, {params: {user_id: user_id, token: token}});
    // ここでかえって来るのは[id , content]
    console.log(`response.data: ${response.data}`);
}

// DBから投稿された内容を一覧として持ってくる
export const getList = async (token :string)=>{
    const url = 'http://localhost:3000/post';
    const response = await axios.get(url, {params: {token: token, records: 10}});
    // response.dataはオブジェクトの配列で帰ってくる
    return response.data
}