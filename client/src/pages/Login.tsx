import { useState } from "react";
import { loginApi } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button"
import {  Input } from "../components/ui/input"
import PageWrapper from "../components/PageWrapper";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await loginApi(email, password);
    login(data.token);
    navigate("/dashboard");
  };

  return (
    <PageWrapper>
      <div className="flex h-screen justify-center items-center">
        <form onSubmit={handleSubmit} className="space-y-4 w-80">
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </PageWrapper>
  );
}
