import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage"
import Transaction from "./pages/Transaction/Transaction"
import BoardPage from "./pages/BoardPage/BoardPage";
import SignInPage from "./pages/SiginPage/SignInPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
