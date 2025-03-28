import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Main } from "./pages/Main";

export const App = ()=>{
  return(
    <div className="App">
      <Routes>
        <Route path="/" element ={<SignIn />} />
        <Route path="/main" element ={<Main />} />
      </Routes>
    </div>
  )
}