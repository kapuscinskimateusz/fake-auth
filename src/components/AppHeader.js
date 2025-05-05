import { useAuth } from "../contexts/FakeAuthContext";
import AppNav from "./AppNav";

export default function AppHeader() {
  const { user, logout } = useAuth();

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ddd",
  };

  function handleLogout() {
    logout();
  }

  return (
    <header style={headerStyle}>
      <h1>FakeAuth</h1>

      <AppNav />

      <div>
        <p>Hi {user.name}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}
