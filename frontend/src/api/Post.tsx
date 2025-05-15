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
export const getList = async (token :string, num :number = 0)=>{
    const url = 'http://localhost:3000/post';
    const response = await axios.get(url, {params: {token: token, start: num, records: 10}});
    // response.dataはオブジェクトの配列で帰ってくる
    return response.data
}

// DBへコメントの削除を依頼,更新された10件のcomment dataが帰ってくる
export const delete_comment = async (token :string, Post_Id :number, num :number)=>{
    const url = 'http://localhost:3000/post';
    const response = await axios.delete(url, {params: {token: token, Post_id: Post_Id, start: num, records: 10}});
    return response.data
}

// キーワードを含む投稿を取得
export const getKeywordList = async (token :string, keyword :string, num :number = 0)=>{
    const url = 'http://localhost:3000/post/keyword';
    const response = await axios.get(url, {params: {token: token, start: num, records: 10, keyword: keyword}});
    // response.dataはオブジェクトの配列で帰ってくる
    return response.data
}