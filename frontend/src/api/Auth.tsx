import axios from "axios";

export const Auth_signIn = async (userId: string, passWord :string): Promise<{token: string, user_id: number}>=>{
    const url = `http://<サーバーのIPアドレス>:3001/auth`;
    const response = await axios.get<{ token: string, user_id: number }>(url, {params: {user_id: userId, pass: passWord}});
    console.log(`response: ${response}`);
    return response.data
}