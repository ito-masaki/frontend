import axios from "axios";


// idに対応するユーザ情報をゲット
export const getUser = async (user_id :number | null, token: string)=>{
    const url = `${import.meta.env.VITE_Backend_URL}/user/${user_id}`;
    const response: any = await axios.get(url, {params: {token: token}});
    return response.data;
}

export const EditUser = async (user_id :number | null, token: string, name: string, introduction: string, gender: string)=>{
    const url = `${import.meta.env.VITE_Backend_URL}/user/edit`;
    const body = {
        id: user_id,
        name: name,
        introduction: introduction,
        gender: gender
    }
    const response: any = await axios.post(url, body, {params: {token: token}});
    return response.data;
}

// 新規登録
export const SignInUser = async (user_id :string, email :string, password :string)=>{
    const url = `${import.meta.env.VITE_Backend_URL}/user/application`;
    const body = {
        name: user_id,
        email: email,
        password: password
    }
    const response: any = await axios.post(url, body);
    return response.data;
}

// 認証コード送信
export const CreateUser = async (email :string, pass :string)=>{
    const url = `${import.meta.env.VITE_Backend_URL}/user/certification`;
    const body = {
        email: email,
        pass: pass,
    }
    const response: any = await axios.post(url, body);
    return response.data;
}

// パスワード再設定
export const Reset_passwaord = async (email: string)=>{
    const url = `${import.meta.env.VITE_Backend_URL}/user/reset_password`;
    const body = {
        email: email,
    }
    const response: any = await axios.post(url, body);
    console.log(`data : ${response.data}`);
    return response.data;
}

// パスワード送信
export const Sendpass = async (pass :string, token :string)=>{
    const url = `${import.meta.env.VITE_Backend_URL}/user/enter_password`;
    const body = {
        pass: pass,
    }
    const response: any = await axios.post(url, body, {params: {token: token}});
    return response.data;
}