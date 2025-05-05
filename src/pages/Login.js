import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { FAKE_USER } from "../utils/fakeUser";
import { useAuth } from "../contexts/FakeAuthContext";
import Input from "../components/Input";

export default function Login() {
  const [email, setEmail] = useState(FAKE_USER.email);
  const [password, setPassword] = useState(FAKE_USER.password);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <div className="page-login">
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Email" value={email} onChange={setEmail} />
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={setPassword}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
