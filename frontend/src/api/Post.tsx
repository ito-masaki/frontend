import axios from "axios";

// レスポンスの型を定義
interface PostData {
    // サーバーから返されるデータの型を明示的に指定（例: id, title, content など）
    id: number;
    title: string;
    content: string;
  }

const getList = async (token: string): Promise<PostData[]> => {
    const url = `http://<サーバアドレス>:3001/post`;
    try {
        const {data} = await axios.get(url, {params: {token, records: 10}});
        return data;
    }
    catch (error){
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
}