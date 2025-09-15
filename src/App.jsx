import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import UserDetail from "./pages/UserDetail/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
