import React, { createContext, useState, ReactNode } from "react";

// 保持する情報の型
type UserInfo = {
    id: number | null;
    token: string;
};
type UserContextType = {
    userinfo: UserInfo;
    setUserinfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}

// Contextの初期値を設定しないと行けない。この型に合わせる形でUserProvider関数でuseStateを定義していく。
export const UserContext = createContext<UserContextType>({
    userinfo: { id: null, token: "" },
    setUserinfo: () => { }
});

interface UserProviderProps {
    children: ReactNode; // ReactNodeに変更（より一般的な型）
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [userinfo, setUserinfo] = useState<UserInfo>({ id: null, token: "" });

    return (
        <UserContext.Provider value={{ userinfo, setUserinfo }}>
            {children}
        </UserContext.Provider>
    );
};

  
  