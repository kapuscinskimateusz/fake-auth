import { useNavigate } from "react-router";

import { routes } from "../utils/appRoutes";

export default function AppNav() {
  const navigate = useNavigate();

  const ulStyle = {
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const liStyle = {
    cursor: "pointer",
  };

  return (
    <nav>
      <ul style={ulStyle}>
        {routes.map((route) => (
          <li
            key={route.name}
            style={liStyle}
            onClick={() => navigate(route.path)}
          >
            {route.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
