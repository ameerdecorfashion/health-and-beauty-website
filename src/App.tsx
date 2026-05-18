import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function Login() {
  return <h1>Login Page</h1>;
}

function Admin() {
  return <h1>Admin Page</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
