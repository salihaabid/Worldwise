import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContexts";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
