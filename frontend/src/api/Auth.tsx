import axios from "axios";


// login時に使用
export const Auth_LogIn = async (userId: string, passWord :string): Promise<{token: string, user_id: number}>=>{
    const API_URL = import.meta.env.VITE_Backend_URL || 'http://localhost:3000';
    console.log('API URL:', import.meta.env.VITE_Backend_URL);
    const url = `${API_URL}/auth`;
    const response = await axios.get<{ token: string, user_id: number }>(url, {params: {user_id: userId, password: passWord}});
    console.log(response.data);
    return response.data
}