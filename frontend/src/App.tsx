import { Route, Routes } from "react-router-dom";
import { LogIn } from "./pages/LogIn";
import { Main } from "./pages/Main";
import { UserProvider } from "./providers/UserProvider";
import { SignIn } from "./pages/SignIn";
import { Certification } from "./pages/Certification";
import { Profile } from "./pages/Profile";
import { ResetPass } from "./pages/ResetPass";
import { Passform } from "./pages/Passform";

export const App = ()=>{
  return(
    <div className="App">
      <UserProvider>
      <Routes>
        <Route path="/" element ={<LogIn />} />
        <Route path="/main" element ={<Main />} />
        <Route path="/signin" element ={<SignIn />} />
        <Route path="/signin/certification" element ={<Certification />} />
        <Route path="/main/profile" element ={<Profile />} />
        <Route path="/Reset" element ={<ResetPass />} />
        <Route path="/passEnter" element ={<Passform />} />
      </Routes>
      </UserProvider>
    </div>
  )
}