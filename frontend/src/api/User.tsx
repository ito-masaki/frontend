import axios from "axios";

export const getUser = async (user_id :number, token: string)=>{
    const url = `http://localhost:3000/user/${user_id}`;
    const response: any = await axios.get(url, {params: {token: token}});
    return response.data.name;
}