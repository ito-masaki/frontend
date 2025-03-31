import axios from "axios";

// login時に使用
export const Auth_signIn = async (userId: string, passWord :string): Promise<{token: string, user_id: number}>=>{
    const url = `http://localhost:3000/auth`;
    const response = await axios.get<{ token: string, user_id: number }>(url, {params: {user_id: userId, password: passWord}});
    console.log(JSON.stringify(response, null, 2));
    return response.data
}