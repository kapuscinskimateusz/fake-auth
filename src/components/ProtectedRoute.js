import { useEffect } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../contexts/FakeAuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("login");
  }, [isAuthenticated, navigate]);

  return isAuthenticated && children;
}
