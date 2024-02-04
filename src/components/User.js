import { useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/FakeAuthContexts";
import styles from "./User.module.css";

function User() {
  const { FAKE_USER, logout, user } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <AuthProvider>
      <div className={styles.user}>
        <img src={user.avatar} alt={user.name} />
        <span>Welcome, {user.name}</span>
        <button onClick={handleClick}>Logout</button>
      </div>
    </AuthProvider>
  );
}

export default User;
